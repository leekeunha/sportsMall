import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Home } from './home.model';
import { Banner } from './banner.model';

@Injectable()
export class Repository {
    //private home: Home = new Home();
    //private productList: Product[] = new Array();
    //public slideProductsList = [];
    //public productsPerSlide = 3;

    constructor(private dataSource: RestDataSource) {
        //this.dataSource.getHome().subscribe(home => {
        //    this.home = home;
        //    //this.slideProductsList = dataSource.getSlideProductsList();
            
        //});
        //this.dataSource.getProducts().subscribe(productList => {
        //    this.productList = productList;
        //});

        //this.dataSource.getSlideProductsList().subscribe(slideProductsList => {
        //    debugger;
        //    this.slideProductsList = slideProductsList;
        //});

    }

    getBannerList(): Banner[] {
        return this.dataSource.getBannerList();
    }

    get LatestGarmentList(): Product[] {
        return this.dataSource.getLatestGarmentList();
    }

    //getProductList(): Product[] {
    //    return this.productList;
    //}
    
    getSlideProductList() {
        return this.dataSource.getSlideProductsList();
    }

    getBannerImageUrlList() {
        return this.dataSource.getBannerImageUrlList();
    }

    getSelectedCategoryProductList(category: string): Product[] {
        return this.dataSource.getSelectedCategoryProductList(category);
    }

    //setSlideProductsList() {
    //    let arrayCopy = [...this.LatestGarmentList]
    //    while (arrayCopy.length > 0) {
    //        this.slideProductsList.push(arrayCopy.splice(0, this.productsPerSlide))
    //    }
    //}
}