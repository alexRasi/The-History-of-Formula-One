import { CONFIG } from './../../../../../environments/config';
import { Component } from '@angular/core';
import { NavItem } from 'src/app/models/ConfigSchema';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navItems: NavItem[] = CONFIG.navItems;

  activeNavItemID: number = 2;

  isCollapsed = true;

  isNavItemActive(itemID: number) {
    return itemID === this.activeNavItemID;
  }
}
