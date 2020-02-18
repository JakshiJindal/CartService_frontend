import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NvBarComponent } from './nv-bar/nv-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {Routes} from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { PDetailsComponent } from './p-details/p-details.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    NvBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SignUpComponent,
    UserCartComponent,
    MyProfileComponent,
    AddProductComponent,
    OrderHistoryComponent,
    ViewDetailsComponent,
    PDetailsComponent,
    ThanksComponent,
    ImageDetailComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
