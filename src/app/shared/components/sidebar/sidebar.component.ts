import { sidebarItems } from './../../models/sidebar-items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = sidebarItems.filter(menuItem => menuItem);
  }

  isMobileMenu() {

  }

}
