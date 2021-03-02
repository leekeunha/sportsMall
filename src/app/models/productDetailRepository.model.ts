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

    getProductDetail(productDetailList: ProductDetail[], productId: number): ProductDetail {
        return this.dataSource.getProductDetail(productDetailList, productId);
    }

}