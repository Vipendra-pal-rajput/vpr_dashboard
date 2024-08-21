import { Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { AdminDashboardComponent } from './Modules/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './Modules/cart/cart.component';
import { LoginComponent } from './Modules/login/login.component';
import { ProductDetailComponent } from './Modules/product-detail/product-detail.component';
import { ProductListComponent } from './Modules/product-list/product-list.component';
import { authGuard } from './Authguard/auth.guard';

export const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [authGuard] } // Protecting the admin dashboard with AuthGuard


];
