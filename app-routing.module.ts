import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MAIN_ROUTES} from './app.route';
import {NvBarComponent} from './nv-bar/nv-bar.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductListComponent} from './product-list/product-list.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {AddProductComponent} from './add-product/add-product.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {ViewDetailsComponent} from './view-details/view-details.component';
import {PDetailsComponent} from './p-details/p-details.component';
import {ThanksComponent} from './thanks/thanks.component';
import {ImageDetailComponent} from './image-detail/image-detail.component';


const routes: Routes = [
  { path: 'nv-bar', component: NvBarComponent },
  { path: 'home',        component: HomePageComponent },
  {path : 'login', component : LoginComponent},
  {path : 'sign-in', component : SignUpComponent},
  {path : 'product-details', component : ProductDetailsComponent},
  {path : 'pdetails', component : PDetailsComponent},
  {path : 'product-list', component : ProductListComponent},
  {path : 'cart', component : UserCartComponent},
  {path : 'my-profile', component : MyProfileComponent},
  {path : 'add-product', component : AddProductComponent},
  {path : 'history', component : OrderHistoryComponent},
  {path : 'view-details', component : ViewDetailsComponent},
  {path : 'thanks', component : ThanksComponent},
  {path : 'image', component : ImageDetailComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
