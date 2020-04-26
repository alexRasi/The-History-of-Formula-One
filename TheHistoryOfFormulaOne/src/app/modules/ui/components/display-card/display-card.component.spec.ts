import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardComponent } from './display-card.component';

describe('DisplayCardComponent', () => {
  let component: DisplayCardComponent;
  let fixture: ComponentFixture<DisplayCardComponent>;

  const testLabelValue = 'Test label';
  const testDescription = 'Test description';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DisplayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardComponent);
    component = fixture.componentInstance;
    component.label = 'Test label';
    component.description = 'Test description'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label', () => {
    const titleHeader = fixture.debugElement.query(By.css('.card-title'));
    expect(titleHeader.nativeElement.textContent.trim()).toBe(testLabelValue);
  });

  it('should have a description', () => {
    const titleHeader = fixture.debugElement.query(By.css('.card-content'));
    expect(titleHeader.nativeElement.textContent.trim()).toBe(testDescription);
  });

});
