import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {

  @Input() imageLink: string;
  @Input() altImageTitle: string;
  @Input() label: string;
  @Input() description: string;
  @Input() moreInfoLink: string;

  constructor() { }

  ngOnInit() {
  }

}
