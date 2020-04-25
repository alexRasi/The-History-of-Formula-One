import { CONFIG } from './../../../../../environments/config';
import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/ConfigSchema';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems: NavItem[] = CONFIG.navItems;

  activeNavItemID: number = 2;

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  isNavItemActive(itemID: number) {
    return itemID === this.activeNavItemID;
  }
}
