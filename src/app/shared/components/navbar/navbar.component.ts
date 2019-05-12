import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from '@shop-cart/app.reducers';
import { sidebarItems } from './../../models/sidebar-items';
import { Product } from '@shop-cart/models/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private listTitles: any[];
  private toggleButton: any;
  private sidebarVisible: boolean;
  cartSubs = new Subscription();
  cart: Product[] = [];
  location: Location;
  mobileMenuVisible = 0;

  constructor(location: Location,
              private element: ElementRef,
              private store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = sidebarItems.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

    this.cartSubs = this.store.subscribe(state => {
      this.cart = state.cart;
    });
  }

  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      setTimeout(() => {
          toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
  }

  sidebarClose() {
      const body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
  }

  sidebarToggle() {
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  }

  getTitle() {
    return 'Store App';
  }

  getTotalProducts() {
    let total = 0;
    for (const item of this.cart) {
      total = total + item.quantity;
    }
    return total;
  }

  sendSearch(search: any, event: Event) {
    event.preventDefault();
    this.router.navigate(['/search', search.value]);
  }

  ngOnDestroy() {
    this.cartSubs.unsubscribe();
  }

}
