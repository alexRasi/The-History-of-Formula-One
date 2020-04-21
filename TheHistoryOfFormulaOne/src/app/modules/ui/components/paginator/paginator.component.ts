import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() limit: number;

  @Output() pageClickedEvent = new EventEmitter<number>();

  currentPage = 1;

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.currentPage++;
    this.pageClickedEvent.emit(this.currentPage);
  }

  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }

    this.pageClickedEvent.emit(this.currentPage)
  }

}
