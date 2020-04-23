import { SeasonsFetchingService } from './../../../data-fetching/services/seasons-fetching-service/seasons-fetching.service';
import { UiModule } from './../../ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardDisplayPageComponent } from './card-display-page.component';
import { ActivatedRoute } from '@angular/router';

describe('CardDisplayPageComponent', () => {
  let component: CardDisplayPageComponent;
  let fixture: ComponentFixture<CardDisplayPageComponent>;

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
          useValue: {snapshot: {data: {'requiredServiceToken': 'SeasonsService'}, paramMap: {get:(id:number)=>{id:'test'}}}}
        },
        {
          provide: 'SeasonsService',
          useClass: SeasonsFetchingService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
