import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CommentComponent } from './products/product/comment/comment.component';
import {FormsModule} from '@angular/forms';
import { CommentsComponent } from './products/product/comment/comments/comments.component';
import {Comment1Component} from './products/product/comment/comments/comment1/comment1.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CommentComponent,
    Comment1Component,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
