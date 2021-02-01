import { Injectable } from "@angular/core";
import { Product } from './models/product.model';
import { ParentCategory } from './models/parentCategory.model';
import * as productsData from './products.json';
import * as categoriesData from './categories.json';

@Injectable()
export class HttpClient {

    getProducts() {
        let productList: Product[] = <Product[]>productsData.products;
        return productList;
    }

    getParentCategories() {
        let parentCategoryList: ParentCategory[] = <ParentCategory[]>categoriesData.parent_categories;
        return parentCategoryList;
    }

    getProductById(productId: number): Product {
        let productList: Product[] = this.getProducts();
        return this.filterByProductId(productList, productId);
    }

    filterByProductId(productList: Product[], productId: number): Product {
        return productList.find(p => p.product_id == productId);
    }

    filterByParentCategoryId(productList: Product[], parentCategoryId: number): Product[] {
        return productList.filter(p => p.parent_category_id == parentCategoryId);
    }

    filterByName(productList: Product[], productName: string): Product {
        return productList.find(p => p.product_name == productName);
    }

    filterByPriceRange(productList: Product[], minValue: number, maxValue: number): Product[] {

        return productList.filter(p => {
             return p.price >= minValue && p.price <= maxValue
        });
    }

};
