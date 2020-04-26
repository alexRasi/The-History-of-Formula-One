import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponentComponent } from './title-component.component';

describe('TitleComponentComponent', () => {
  let component: TitleComponentComponent;
  let fixture: ComponentFixture<TitleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponentComponent);
    component = fixture.componentInstance;

    component.mainTitle = 'Main title';
    component.titleAbove = 'Title above';
    component.titleBelow = 'Title below'

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title as given', () => {
    const content = fixture.debugElement.nativeElement.querySelector('.big-title');
    expect(content.innerHTML).toContain('Main title');
  });

  it('should display a title above as given', () => {
    const content = fixture.debugElement.nativeElement.querySelector('.title-above');
    expect(content.innerHTML).toContain('Title above');
  });

  it('should display a title below as given', () => {
    const content = fixture.debugElement.nativeElement.querySelector('.title-below');
    expect(content.innerHTML).toContain('Title below');
  });

});
