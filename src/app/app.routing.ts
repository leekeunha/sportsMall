import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './mall/home/home.component';
import { ProductDetailComponent } from './mall/productDetail/productDetail.component';
import { CartDetailComponent } from './mall/cartDetail/cartDetail.component';
import { CheckoutComponent } from './mall/checkout/checkout.component';
import { CategoryProductsComponent } from './mall/categoryProducts/categoryProducts.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products/shoes", component: CategoryProductsComponent},
    { path: "products/tops", component: CategoryProductsComponent},
    { path: "products/pants", component: CategoryProductsComponent},
    { path: "products/swimwear", component: CategoryProductsComponent },
    { path: "products/accesories", component: CategoryProductsComponent},
    { path: "product/:id", component: ProductDetailComponent},
    { path: "cart", component: CartDetailComponent},
    { path: "checkout", component: CheckoutComponent},
    { path: "**", component: HomeComponent },
]

export const routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });