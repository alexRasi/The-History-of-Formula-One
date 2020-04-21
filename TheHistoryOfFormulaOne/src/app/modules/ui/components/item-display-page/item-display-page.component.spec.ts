import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDisplayPageComponent } from './item-display-page.component';

describe('ItemDisplayPageComponent', () => {
  let component: ItemDisplayPageComponent;
  let fixture: ComponentFixture<ItemDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
