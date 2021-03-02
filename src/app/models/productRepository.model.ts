import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { ProductDetail } from './productDetail.model';

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

    getProductsByParentCategoryName(productList: Product[], parentCategoryName: string) {
        return this.dataSource.getProductsByParentCategoryName(productList, parentCategoryName);
    }

    getProductsByParentCategoryNameAndChildCategoryId(productList: Product[], parentCategoryName: string, childCategoryId: number): Product[] {
        return this.dataSource.getProductsByParentCategoryNameAndChildCategoryId(productList, parentCategoryName, childCategoryId);
    }

    getProduct(productList:Product[], productId: number) :Product{
        return this.dataSource.getProduct(productList, productId);
    }

    getProductDetailList(): Observable<ProductDetail[]> {
        return this.dataSource.getProductDetailList();
    }
}