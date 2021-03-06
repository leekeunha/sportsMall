import { Component} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { CategoryRepository } from '../../models/categoryRepository.model';
import { ProductRepository } from '../../models/productRepository.model';

@Component({
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

        this.router.events.subscribe((e: any) => {
            this.parentCategoryName = activeRoute.snapshot.url[1].path;
            this.productList = productRepository.getProductsByParentCategoryName(this.parentCategoryName);
            this.categoryList = categoryRepository.getChildCategories(this.parentCategoryName);
        });

        //productRepository.getProducts().subscribe( products => {
        //    this.productList = productRepository.getProductsByParentCategoryName(this.parentCategoryName);
        //});
        
       //productRepository.getProducts().subscribe(list => {
       //     this.productList = productRepository.getProductsByParentCategoryName(this.parentCategoryName);
       // });

        //categoryRepository.getParentCategories().subscribe(parentCategoryList => {
        //    this.categoryList = categoryRepository.getChildCategories(parentCategoryList, this.parentCategoryName);
        //});
    }
    
    get productsInPage(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.productList.slice(pageIndex, pageIndex + this.productsPerPage);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    get pageCount(): number {
        return Math.ceil(this.productList.length / this.productsPerPage);
    }

    getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName: string, childCategoryId: number): void {
        this.productRepository.getProducts().subscribe(productList => {
            this.productList = this.productRepository.getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName, childCategoryId);
        });
    }
}