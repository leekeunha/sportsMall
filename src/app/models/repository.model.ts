import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Banner } from './banner.model';
import { Observable } from 'rxjs';

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

    getSelectedCategoryProductList(category: string): Product[] {
        return this.dataSource.getSelectedCategoryProductList(category);
    }
}