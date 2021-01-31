import { Injectable } from "@angular/core";
import { Product } from './models/product.model';
import { ParentCategory } from './models/parentCategory.model';
import * as productsData from './products.json';
import * as categoriesData from './categories.json';

@Injectable()
export class HttpClient {
    private productList: Product[];
    private parentCategoryList: ParentCategory[];

    getProducts() {
        this.productList = <Product[]>productsData.products;
        return this.productList;
    }

    getParentCategories() {
        this.parentCategoryList = <ParentCategory[]>categoriesData.parent_categories;
        return this.parentCategoryList;
    }

}