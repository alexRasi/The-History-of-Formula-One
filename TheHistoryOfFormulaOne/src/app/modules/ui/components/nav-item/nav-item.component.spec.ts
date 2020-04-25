import { By } from '@angular/platform-browser';
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

    component.title = 'Test title';
    component.link = 'Test link';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBeTruthy();
  });

  it('should have a link', () => {
    expect(component.link).toBeTruthy();
  });

  it('should display a title', () => {
    const content = fixture.debugElement.nativeElement.querySelector('a');
    expect(content.innerHTML).toContain('Test title');
  });

  it('anchor should have an href attribute', () => {
    const content = fixture.debugElement.nativeElement.querySelector('a');
    expect(content.href).toBeTruthy();
  });
});
