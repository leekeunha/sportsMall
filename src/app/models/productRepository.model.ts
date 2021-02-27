import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class ProductRepository {

    constructor(private dataSource: RestDataSource) {
    }

    getProducts(): Observable<Product[]> {
        return this.dataSource.getProducts();
    }

    get LatestGarmentList(): Product[] {
        return this.dataSource.getLatestGarmentList();
    }

    getSlideProductList() {
        return this.dataSource.getSlideProductsList();
    }

    getProductsByParentCategoryName(parentCategoryName: string) {
        return this.dataSource.getProductsByParentCategoryName(parentCategoryName);
    }

    getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName: string, childCategoryId: number): Product[] {
        return this.dataSource.getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName, childCategoryId);
    }
}