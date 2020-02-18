import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

export const MAIN_ROUTES: Routes = [
{path: 'home',
  component: HomePageComponent,
},
{
  path: 'cart',
    component: UserCartComponent,
},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  }];
