import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemComponent } from './nav-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ NavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
