import { Injectable } from "@angular/core";
import { ParentCategory } from '../models/parentCategory.model';
import { Product } from '../models/product.model';
import * as productsData from './fixture/products.json';
import * as categoriesData from './fixture/categories.json';

@Injectable()
export class HttpClient {

    getProducts() : Product[] {
        let productList: Product[] = <Product[]>productsData.products;
        return productList;
    }

    getParentCategories(): ParentCategory[] {
        let parentCategoryList: ParentCategory[] = <ParentCategory[]>categoriesData.parentCategories;
        return parentCategoryList;
    }

    getProductById(productId: number): Product {
        let productList: Product[] = this.getProducts();
        return this.filterByProductId(productList, productId);
    }

    filterByProductId(productList: Product[], productId: number): Product {
        return productList.find(p => p.productId == productId);
    }

    filterByParentCategoryId(productList: Product[], parentCategoryId: number): Product[] {
        return productList.filter(p => p.parentCategoryId == parentCategoryId);
    }

    filterByName(productList: Product[], productName: string): Product {
        return productList.find(p => p.productName == productName);
    }

    filterByPriceRange(productList: Product[], minValue: number, maxValue: number): Product[] {

        return productList.filter(p => {
             return p.price >= minValue && p.price <= maxValue
        });
    }

};
