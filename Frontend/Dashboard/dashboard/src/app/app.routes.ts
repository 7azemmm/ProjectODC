import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import{CreateProductComponent} from './pages/create-product/create-product.component'
import { authGuard } from './service/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { GetProductsComponent } from './pages/get-products/get-products.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
        
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [authGuard]
            },{   path:'UpdateProduct/:productId',
                component:UpdateProductComponent
             },{
                path: 'createProduct',
                component: CreateProductComponent,
                canActivate: [authGuard]
            },
            {
                path: 'GetProduct',
                component: GetProductsComponent,
                canActivate: [authGuard]
            }
        ]
    }
];
