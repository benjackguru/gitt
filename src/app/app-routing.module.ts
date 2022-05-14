import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienthomeComponent } from './client/clienthome/clienthome.component';
import { DetailsComponent } from './client/details/details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddSubcategoryComponent } from './components/add-subcategory/add-subcategory.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { VendorComponent } from './components/vendor/vendor.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'vendor', component:VendorComponent},
  {path:'add-vendor', component:AddVendorComponent},
  {path:'category', component:CategoryComponent},
  {path:'subcategory', component:SubcategoryComponent},
  {path:'product', component:ProductsComponent},
  {path:'add-category', component:AddCategoryComponent},
  {path:'add-subcategory', component:AddSubcategoryComponent},
  {path:'add-product', component:AddProductsComponent},
  {path:'clienthome',component:ClienthomeComponent},
  {path:'detail',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
