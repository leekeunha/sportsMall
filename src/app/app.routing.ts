import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './mall/home/home.component';
import { CategoryComponent } from './mall/category/category.componenet';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products/shoes", component: CategoryComponent },
    { path: "products/tops", component: CategoryComponent },
    { path: "products/pants", component: CategoryComponent },
    { path: "products/swimwear", component: CategoryComponent },
    { path: "products/accesories", component: CategoryComponent },
    { path: "**", component: HomeComponent },
]

export const routing = RouterModule.forRoot(routes);