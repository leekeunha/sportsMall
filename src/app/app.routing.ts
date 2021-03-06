import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './mall/home/home.component';
import { ProductDetailComponent } from './mall/productDetail/productDetail.component';
import { CartDetailComponent } from './mall/cartDetail/cartDetail.component';
import { CheckoutComponent } from './mall/checkout/checkout.component';
import { CategoryProductsComponent } from './mall/categoryProducts/categoryProducts.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products/:categoryName", component: CategoryProductsComponent},
    { path: "products/:categoryName", component: CategoryProductsComponent},
    { path: "products/:categoryName", component: CategoryProductsComponent},
    { path: "products/:categoryName", component: CategoryProductsComponent },
    { path: "products/:categoryName", component: CategoryProductsComponent},
    { path: "product/:id", component: ProductDetailComponent},
    { path: "cart", component: CartDetailComponent},
    { path: "checkout", component: CheckoutComponent},
    { path: "**", component: HomeComponent },
]

export const routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });