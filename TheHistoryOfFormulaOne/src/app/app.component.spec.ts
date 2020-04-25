import { SpinLoaderComponent } from './modules/ui/components/spin-loader/spin-loader.component';
import { FooterComponent } from './modules/ui/components/footer/footer.component';
import { By } from '@angular/platform-browser';
import { UiModule } from './modules/ui/ui.module';
import { NavbarComponent } from './modules/ui/components/navbar/navbar.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

let fixture: ComponentFixture<AppComponent>

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        UiModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a navbar', () => {
    expect(fixture.debugElement.query(By.directive(NavbarComponent))).toBeTruthy();
  });

  it('should have a router outlet', () => {
    expect(fixture.debugElement.query(By.directive(RouterOutlet))).toBeTruthy();
  });

  it('should have a footer', () => {
    expect(fixture.debugElement.query(By.directive(FooterComponent))).toBeTruthy();
  });

  it('should have a loading spinner component', () => {
    expect(fixture.debugElement.query(By.directive(SpinLoaderComponent))).toBeTruthy();
  });
});
