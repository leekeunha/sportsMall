import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { ProductDetail } from './productDetail.model';

@Injectable()
export class ProductDetailRepository {

    constructor(private dataSource: RestDataSource) {
    }

    getProductDetailList(): Observable<ProductDetail[]> {
        return this.dataSource.getProductDetailList();
    }


    //get LatestGarmentList(): Product[] {
    //    return this.dataSource.getLatestGarmentList();
    //}

    //getSlideProductList() {
    //    return this.dataSource.getSlideProductsList();
    //}

    //getProductsByParentCategoryName(parentCategoryName: string) {
    //    return this.dataSource.getProductsByParentCategoryName(parentCategoryName);
    //}

    //getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName: string, childCategoryId: number): Product[] {
    //    return this.dataSource.getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName, childCategoryId);
    //}
}