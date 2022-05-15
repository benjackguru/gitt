import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { AddSubcategoryComponent } from './components/add-subcategory/add-subcategory.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { MaterialModule } from './module/material/material.module';
import { DetailsComponent } from './client/details/details.component';
import { ClienthomeComponent } from './client/clienthome/clienthome.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
    VendorComponent,
    AddVendorComponent,
    CategoryComponent,
    AddCategoryComponent,
    SubcategoryComponent,
    AddSubcategoryComponent,
    ProductsComponent,
    AddProductsComponent,
    DetailsComponent,
    ClienthomeComponent,
    MovielistComponent,
    AddMovieComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
