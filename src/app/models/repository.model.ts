import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Banner } from './banner.model';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { ParentCategory } from './parentCategory.model';

@Injectable()
export class Repository {

    

    constructor(private dataSource: RestDataSource) {
    }

    getProducts(): Observable<Product[]> {
        return this.dataSource.getProducts();
    }

    getBannerList(): Banner[] {
        return this.dataSource.getBannerList();
    }

    get LatestGarmentList(): Product[] {
        return this.dataSource.getLatestGarmentList();
    }

    getSlideProductList() {
        return this.dataSource.getSlideProductsList();
    }

    getBannerImageUrlList() {
        return this.dataSource.getBannerImageUrlList();
    }

    getProductListInParentCategory(category: string): Product[] {
        return this.dataSource.getProductListInParentCategory(category);
    }

    getCategoryListInParentCategory(category: string): Category[] {
        return this.dataSource.getCategoryListInParentCategory(category);
    }

    getParentCategories(): Observable<ParentCategory[]> {
        return this.dataSource.getParentCategories();
    }

    getProductsByCategoryIdInParent(categoryId: number): Product[] {
        return this.dataSource.getProductsByCategoryIdInParent(categoryId);
    }
}