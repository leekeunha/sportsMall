import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../../models/repository.model';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Component({
    selector: "category-products",
    templateUrl: "./categoryProducts.component.html",
    styleUrls: ['./categoryProducts.component.css']
})
export class CategoryProductsComponent {

    public productList: Product[];
    public cateogryParentCategoryId: number;
    public productsPerPage = 9;
    public productsPerRow = 3;
    public selectedPage = 1;
    public categoryList: Category[];

    constructor(private repository: Repository, activeRoute: ActivatedRoute) {

        let parentCategory: string = activeRoute.snapshot.url[1].path;

        repository.getProducts().subscribe(data => {
            this.productList = repository.getProductListInParentCategory(parentCategory);
        });

        repository.getParentCategories().subscribe(data => {
            this.categoryList = repository.getCategoryListInParentCategory(parentCategory);
        });
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.productList.slice(pageIndex, pageIndex + this.productsPerPage);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    get pageCount(): number {
        return Math.ceil(this.productList.length / this.productsPerPage);
    }

    getProductsByCategoryIdInParentCategory(categoryId:number) {
        this.productList = this.repository.getProductsByCategoryIdInParent(categoryId);
    }
}