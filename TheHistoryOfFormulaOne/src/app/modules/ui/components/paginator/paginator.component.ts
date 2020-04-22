import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() totalPages: number;

  @Output() pageClickedEvent = new EventEmitter<number>();

  currentPage = 1;

  constructor() { }

  ngOnInit() {
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }

    this.pageClickedEvent.emit(this.currentPage);
  }

  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }

    this.pageClickedEvent.emit(this.currentPage)
  }

  goToLastPage() {
    this.currentPage = this.totalPages;
    this.pageClickedEvent.emit(this.currentPage)
  }

  goToFirstPage() {
    this.currentPage = 1;
    this.pageClickedEvent.emit(this.currentPage)
  }

  emitPageChange() {
    this.pageClickedEvent.emit(this.currentPage);
  }

}
