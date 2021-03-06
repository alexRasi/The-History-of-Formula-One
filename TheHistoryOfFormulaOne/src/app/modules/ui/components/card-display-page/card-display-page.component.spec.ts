import { DisplayCardComponent } from './../display-card/display-card.component';
import { PaginatorComponent } from './../paginator/paginator.component';
import { TitleComponentComponent } from './../title-component/title-component.component';
import { CARD_PAGE_GENERIC_DATA_MOCK, CARD_PAGE_GENERIC_DATA_LESS_THAN_PAGE_MOCK } from './../../../../testing-mocks/CardPageGenericData';
import { CARD_GENERIC_DATA_MOCK } from './../../../../testing-mocks/CardGenericData';
import { CacheService } from './../../../cache/cache.service';
import { SeasonsFetchingService } from './../../../data-fetching/services/seasons-fetching-service/seasons-fetching.service';
import { UiModule } from './../../ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardDisplayPageComponent } from './card-display-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CardDisplayPageComponent', () => {
  let component: CardDisplayPageComponent;
  let fixture: ComponentFixture<CardDisplayPageComponent>;

  let cacheService: CacheService;
  let seasonsFetchingService: SeasonsFetchingService

  jasmine.getEnv().allowRespy(true);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        UiModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { 'requiredServiceToken': 'SeasonsService' }, paramMap: { get: (id: number) => { id: 'test' } } } }
        },
        {
          provide: 'SeasonsService',
          useClass: SeasonsFetchingService
        },
        CacheService
      ]
    })
      .compileComponents();

    cacheService = TestBed.get(CacheService);
    seasonsFetchingService = TestBed.get('SeasonsService')
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDisplayPageComponent);
    component = fixture.debugElement.componentInstance;
    spyOn(cacheService, 'getFromCache').and.returnValue([CARD_GENERIC_DATA_MOCK.cards]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When cache has data', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CardDisplayPageComponent);
      component = fixture.debugElement.componentInstance;
      spyOn(cacheService, 'getFromCache').and.returnValue([CARD_GENERIC_DATA_MOCK.cards]);
      fixture.detectChanges();
    });

    it('should have a datasource', () => {
      expect(component.dataSource).toBeTruthy();
    })
  })

  describe('When cache has no data', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CardDisplayPageComponent);
      component = fixture.debugElement.componentInstance;
      spyOn(cacheService, 'getFromCache').and.returnValue([undefined]);
      spyOn(seasonsFetchingService, 'getTransformedData').and.returnValue(of(CARD_PAGE_GENERIC_DATA_MOCK));
      fixture.detectChanges();
    });

    it('should have a datasource', () => {
      expect(component.dataSource).toBeTruthy();
    })
  })

  describe('When data are more than pageSize', () => {
    beforeEach(() => {
      spyOn(cacheService, 'getFromCache').and.returnValue([undefined]);
      spyOn(seasonsFetchingService, 'getTransformedData').and.returnValue(of(CARD_PAGE_GENERIC_DATA_MOCK));
      fixture = TestBed.createComponent(CardDisplayPageComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    });

    it('should display a paginator', () => {
      const paginatorComponent = fixture.debugElement.query(By.directive(PaginatorComponent))
      expect(paginatorComponent).toBeTruthy();
    })

  })

  describe('When data are less than pageSize', () => {
    beforeEach(() => {
      spyOn(cacheService, 'getFromCache').and.returnValue([undefined]);
      spyOn(seasonsFetchingService, 'getTransformedData').and.returnValue(of(CARD_PAGE_GENERIC_DATA_LESS_THAN_PAGE_MOCK));
      fixture = TestBed.createComponent(CardDisplayPageComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    });

    it('should not display a paginator', () => {
      const paginatorComponent = fixture.debugElement.query(By.directive(PaginatorComponent))
      expect(paginatorComponent).toBeFalsy();
    })

  })

  it('should display title component', () => {
    const titleComponent = fixture.debugElement.query(By.directive(TitleComponentComponent))
    expect(titleComponent).toBeTruthy();
  })

  it('should display a card list', () => {
    spyOn(component.cacheService, 'getFromCache').and.returnValue([undefined]);
    spyOn(component.dataFetchingService, 'getTransformedData').and.returnValue(of(CARD_PAGE_GENERIC_DATA_LESS_THAN_PAGE_MOCK));

    fixture = TestBed.createComponent(CardDisplayPageComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    const cardComponent = fixture.debugElement.query(By.directive(DisplayCardComponent)).nativeElement;
    expect(cardComponent).toBeTruthy();
  })
});
