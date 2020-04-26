import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  title: string = 'This page does not exist yet'
  aboveTitle: string = 'Oops!';

  constructor() { }

  ngOnInit() {
  }

}
