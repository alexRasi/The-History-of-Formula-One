import { LoadingSpinnerService } from './../../services/loading-spinner-service/loading-spinner.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinLoaderComponent } from './spin-loader.component';
import { DebugElement } from '@angular/core';

describe('SpinLoaderComponent', () => {
  let component: SpinLoaderComponent;
  let fixture: ComponentFixture<SpinLoaderComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinLoaderComponent],
      providers: [LoadingSpinnerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('If spinloader service showSpinner() is called', () => {
    beforeEach(async(() => {
      component.loadingSpinnerService.showSpinner();
      fixture.detectChanges();
    }));

    it('loader should be displayed ', async () => {
      expect(fixture.debugElement.nativeElement.querySelector('.lds-ripple')).toBeTruthy();
    });

  });

  describe('If spinloader service hideSpinner() is called', () => {
    beforeEach(async(() => {
      component.loadingSpinnerService.hideSpinner();
      fixture.detectChanges();
    }));

    it('loader should not be displayed ', async () => {
      expect(fixture.debugElement.nativeElement.querySelector('.lds-ripple')).toBeFalsy();
    });

  });

});
