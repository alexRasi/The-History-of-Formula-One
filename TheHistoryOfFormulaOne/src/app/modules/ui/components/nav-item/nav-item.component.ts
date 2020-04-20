import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;
  @Input() isActive: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
    this.checkRouteAndSetAsActive()
  }

  checkRouteAndSetAsActive() {
    this.router.events.subscribe(val => {
      if (val['url']) {
        const url: string = val['url'];

        this.isActive = url.includes(this.title.toLocaleLowerCase()) ? true : false;
      }
    })
  }

}
