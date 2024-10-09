import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormComponent } from './form/form.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { Component } from '@angular/core';

export const routes: Routes = [

    {
        path: '',  // Root path
    component: HomeComponent,  // Home component as parent
 
    },
    {
        path:"home",
        component:ImageSliderComponent

    },
    {
        path:"products",
        component:ProductsComponent,
    }, {   path:'products/:productId',
        component:SingleProductComponent
     },{
        path:"form",
        component:FormComponent,
     }
];
