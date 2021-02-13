import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Home } from './home.model';
import { Banner } from './banner.model';

@Injectable()
export class Model {
    private home: Home = new Home();
    private productList: Product[] = new Array();

    //private locator = (p: Product, id: number) => p.productId == id;

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getHome().subscribe(home => this.home = home);
        this.dataSource.getProducts().subscribe(productList => this.productList = productList);
        //this.dataSource.getProducts().subscribe(products => {
        //    this.ProductList = products;
        //    debugger;
        //});
    }

    getBannerList(): Banner[] {
        return this.home.bannerList;
    }

    getLatestGarmentList(): Product[] {
        return this.home.latestGarmentList;
    }

    getProductList(): Product[] {
        return this.productList;
    }

    //getProduct(id: number): Product {
    //    return this.products.find(p => this.locator(p, id));
    //}

}