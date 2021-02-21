import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './mall/home/home.component';
import { CategoryProductsComponent } from './mall/categoryProducts/CategoryProducts.componenet';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products/shoes", component: CategoryProductsComponent },
    { path: "products/tops", component: CategoryProductsComponent },
    { path: "products/pants", component: CategoryProductsComponent },
    { path: "products/swimwear", component: CategoryProductsComponent },
    { path: "products/accesories", component: CategoryProductsComponent },
    { path: "**", component: HomeComponent },
]

export const routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });