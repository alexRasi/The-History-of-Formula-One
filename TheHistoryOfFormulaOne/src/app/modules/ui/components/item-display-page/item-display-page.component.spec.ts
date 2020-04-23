import { of } from 'rxjs';
import { DataFetchingService } from 'src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from './../../ui.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDisplayPageComponent } from './item-display-page.component';
import { ConstructorItemFetchingService } from 'src/app/modules/data-fetching/services/constructor-item-fetching-service/constructor-item-fetching.service';
import { InjectionToken, Injector } from '@angular/core';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItemDisplayPageComponent', () => {
  let component: ItemDisplayPageComponent;
  let fixture: ComponentFixture<ItemDisplayPageComponent>;

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDisplayPageComponent);
    component = fixture.componentInstance;
    console.log(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
