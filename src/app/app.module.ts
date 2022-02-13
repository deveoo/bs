import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component'
import { CategoryProductDetailsComponent } from './pages/category-product-details/category-product-details.component'
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeFeaturedProductsModalComponent } from './components/home-featured-products-modal/home-featured-products-modal.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { PersonalInformationsComponent } from './components/account/personal-informations/personal-informations.component'
import { OrderDetailsComponent } from './components/account/order-details/order-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SubcategoryComponent,
    CategoryProductsComponent,
    ProductDetailsComponent,
    CategoryProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    HomeFeaturedProductsModalComponent,
    AllProductsComponent,
    AllCategoriesComponent,
    PersonalInformationsComponent,
    OrderDetailsComponent,
  ],
  entryComponents: [
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
  