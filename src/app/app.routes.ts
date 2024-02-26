import { Routes } from '@angular/router';
import { HomeComponent } from './compontents/home/home.component';
import { ProductComponent } from './compontents/product/product.component';
import { ProductDetailsComponent } from './compontents/product-details/product-details.component';
import { AboutComponent } from './compontents/about/about.component';
import { PagenotfoundComponent } from './compontents/pagenotfound/pagenotfound.component';
import { ContactUsComponent } from './compontents/contact-us/contact-us.component';
import { CartComponent } from './compontents/cart/cart.component';
import { AdminComponent } from './compontents/admin/admin.component';
import { InsertproductComponent } from './compontents/admin/insertproduct/insertproduct.component';
import { OrderComponent } from './compontents/order/order.component';
import { LoginComponent } from './compontents/login/login.component';
import { SignUPComponent } from './compontents/sign-up/sign-up.component';
import { userguardGuard } from './Guards/userguard.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent , canActivate:[userguardGuard]},
    { path: 'contactus', component: ContactUsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'proddet/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'order', component: OrderComponent , canActivate:[userguardGuard] },
    { path: 'login', component: LoginComponent, title:'Login'  },
    { path: 'signup', component: SignUPComponent , title:'Signup' },
{path:'admin',component:AdminComponent , children:[
{path:'insertProduct', component:InsertproductComponent}
]},

{ path: 'order', component: OrderComponent },

    //  wild card route
    { path: '**', component: PagenotfoundComponent },
];
