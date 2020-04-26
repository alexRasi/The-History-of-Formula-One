import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.pageClickedEvent, 'emit');

    // trigger the click
    const button = fixture.debugElement.query(By.css('.next-page')).nativeElement;
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.pageClickedEvent.emit).toHaveBeenCalledWith(1);
 });
});
