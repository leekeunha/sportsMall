import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './mall/home/home.component';
import { ProductsComponent } from './mall/products/products.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products/shoes", component: ProductsComponent },
    { path: "products/tops", component: ProductsComponent },
    { path: "products/pants", component: ProductsComponent },
    { path: "products/swimwear", component: ProductsComponent },
    { path: "products/accesories", component: ProductsComponent },
    { path: "", component: HomeComponent },
]

export const routing = RouterModule.forRoot(routes);