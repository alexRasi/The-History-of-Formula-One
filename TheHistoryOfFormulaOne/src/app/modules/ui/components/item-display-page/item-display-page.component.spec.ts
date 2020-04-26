import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from './../../ui.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDisplayPageComponent } from './item-display-page.component';
import { ConstructorItemFetchingService } from 'src/app/modules/data-fetching/services/constructor-item-fetching-service/constructor-item-fetching.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ITEM_DISPLAY_PAGE_GENERIC_DATA_MOCK } from 'src/app/testing-mocks/ItemDisplayPageGenericDataMock';

describe('ItemDisplayPageComponent', () => {
  let component: ItemDisplayPageComponent;
  let fixture: ComponentFixture<ItemDisplayPageComponent>;

  let constructorsService: ConstructorItemFetchingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UiModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {data: {'requiredServiceToken': 'ConstructorItemService'}, paramMap: {get:(id:number)=>{id:'test'}}}}
        },
        {
          provide: 'ConstructorItemService',
          useClass: ConstructorItemFetchingService
        }
      ]
    })
    .compileComponents();

    constructorsService = TestBed.get('ConstructorItemService');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDisplayPageComponent);
    component = fixture.componentInstance;
    spyOn(constructorsService, 'getTransformedData').and.returnValue(of(ITEM_DISPLAY_PAGE_GENERIC_DATA_MOCK))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a datasource', () => {
    expect(component.pageData).toBeTruthy();
  });

  it('should display details', () => {
    const title = fixture.debugElement.query(By.css('.detail')).nativeElement;
    expect(title).toBeTruthy();
  });
});
