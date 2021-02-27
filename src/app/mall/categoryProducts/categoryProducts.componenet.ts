import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { CategoryRepository } from '../../models/categoryRepository.model';
import { ProductRepository } from '../../models/productRepository.model';

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
    public parentCategoryName: string;

    constructor(private categoryRepository: CategoryRepository, private productRepository: ProductRepository, activeRoute: ActivatedRoute, private router: Router) {

        this.parentCategoryName = activeRoute.snapshot.url[1].path;

        this.router.events.subscribe((e: any) => {
            this.productList = productRepository.getProductsByParentCategoryName(this.parentCategoryName);
            this.categoryList = categoryRepository.getChildCategories(this.parentCategoryName);
        });

        productRepository.getProducts().subscribe(data => {
            this.productList = productRepository.getProductsByParentCategoryName(this.parentCategoryName);
        });

        categoryRepository.getParentCategories().subscribe(data => {
            this.categoryList = categoryRepository.getChildCategories(this.parentCategoryName);
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

    getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName, childCategoryId): void {
        this.productList = this.productRepository.getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName, childCategoryId);
    }
}