import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentComponent} from './products/product/comment/comment.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: 'products', component: ProductsComponent},
  {path: 'comment/:id', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
