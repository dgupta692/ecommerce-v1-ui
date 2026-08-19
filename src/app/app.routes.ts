import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products';
import { LoginComponent } from './pages/login/login';
import { authGuard } from './core/guards/auth-guard';
import { ProductDetailsComponent } from './pages/product-details/product-details';
import { OrdersComponent } from './pages/orders/orders';
import { OrderDetailsComponent } from './pages/order-details/order-details';

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
        path: 'products',
        component: ProductsComponent,
        canActivate: [authGuard]
    },

    {
        path: 'products/:id',
        component: ProductDetailsComponent
    },

    {
        path: 'orders',
        component: OrdersComponent
    },

    {
        path: 'orders/:id',
        component: OrderDetailsComponent
    }
];
