import { Component, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../../models/repository.model';
import { Product } from '../../models/product.model';

@Component({
    selector: "category-products",
    templateUrl: "./categoryProducts.component.html",
    styleUrls: ['./categoryProducts.component.css']
})
export class CategoryProductsComponent {

    public cateogryProductList: Product[];
    public productsPerPage = 9;
    public productsPerRow = 3;
    public selectedPage = 1;

    constructor(private repository: Repository, activeRoute: ActivatedRoute) {
        let category: string = activeRoute.snapshot.url[1].path;
        repository.getProducts().subscribe(data => {
            this.cateogryProductList = repository.getSelectedCategoryProductList(category);
        });
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.cateogryProductList.slice(pageIndex, pageIndex + this.productsPerPage);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    get pageCount(): number {
        return Math.ceil(this.cateogryProductList.length / this.productsPerPage);
    }
}