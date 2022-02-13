import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';

import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component'
import { CategoryProductDetailsComponent } from './pages/category-product-details/category-product-details.component'

const routes: Routes = [
  { path: '', redirectTo: 'onbroading', pathMatch: 'full' },
  { path: 'onbroading', loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: 'landing', loadChildren: () => import('./pages/auth/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/auth/signup/signup.module').then(m => m.SignupModule) },
  { path: 'signin', loadChildren: () => import('./pages/auth/signin/signin.module').then(m => m.SigninModule) },
  { path: 'forget-password', loadChildren: () => import('./pages/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'verification', loadChildren: () => import('./pages/auth/verification/verification.module').then(m => m.VerificationModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'subcategory/:id', component: SubcategoryComponent },
  { path: 'products/:id', component: CategoryProductsComponent },
  { path: 'categoryProduct/:id', component: CategoryProductDetailsComponent },
  { path: 'displayAll/products', component: AllProductsComponent },
  { path: 'displayAll/categories', component: AllCategoriesComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
