import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductSearchComponent } from './products/product-search/product-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }, {
    path: 'product/:id',
    component: ProductDetailComponent
  }, {
    path: 'search/:query',
    component: ProductSearchComponent
  }, {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  }, {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }, {
    path: 'not-found',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
