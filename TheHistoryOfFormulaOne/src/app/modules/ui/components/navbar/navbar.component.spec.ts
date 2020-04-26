import { NavItemComponent } from './../nav-item/nav-item.component';
import { By } from '@angular/platform-browser';
import { UiModule } from './../../ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, UiModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display navigation items', () => {
    expect(fixture.debugElement.query(By.directive(NavItemComponent))).toBeTruthy();
  });

  it('should have anchor elements', () => {
    expect(fixture.debugElement.query(By.css('a'))).toBeTruthy();
  });

});
