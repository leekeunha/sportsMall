import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Home } from './home.model';
import { Product } from './product.model';
import { Banner } from './banner.model';

export const REST_URL = new InjectionToken("rest_url");
const HOME = "home";
 const PRODUCTLIST = "productList";

@Injectable()
export class RestDataSource {

    private slideProductsList = [];
    private productsPerSlide = 3;
    private bannerList = new Array<Banner>();
    private latestGarmentList = new Array<Product>();
    private bannerImageUrlList = [];
    private categoryProductList : Product[];
    private productList: Product[] = new Array();

    constructor(private http: HttpClient, @Inject(REST_URL) private url: string) {

        this.getHome().subscribe(home => {

            this.setSlideProductsList(home);
            this.setBannerImagesUrl(home);

            this.bannerList = home.bannerList;
            this.latestGarmentList = home.latestGarmentList;
        });

        this.getProducts().subscribe(productList => {
            this.productList = productList;

        });
    }

    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.url}/${HOME}`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.url}/${PRODUCTLIST}`);
    }

    getSlideProductsList() {
        return this.slideProductsList;
    }

    getBannerList(): Banner[] {
        return this.bannerList;
    }

    getLatestGarmentList(): Product[] {
        return this.latestGarmentList;
    }

    getBannerImageUrlList(): string[] {
        return this.bannerImageUrlList;
    }

    setSlideProductsList(home) {
        let arrayCopy = [...home.latestGarmentList]
        while (arrayCopy.length > 0) {
            this.slideProductsList.push(arrayCopy.splice(0, this.productsPerSlide))
        }
    }

    setBannerImagesUrl(home) {
        home.bannerList.forEach((item) => {
            this.bannerImageUrlList.push(item.imageUrl);
        });
    }

    getSelectedCategoryProductList(category: string): Product[]{

        switch (category) {
            case "shoes":
                this.categoryProductList = this.filterByParentCategoryId(1);
                break;
            case "tops":
                this.categoryProductList = this.filterByParentCategoryId(2);
                break;
            case "pants":
                this.categoryProductList = this.filterByParentCategoryId(3);
                break;
            case "swimwear":
                this.categoryProductList = this.filterByParentCategoryId(4);
                break;
            case "accesories":
                this.categoryProductList = this.filterByParentCategoryId(5);
                break;
            default:
                break;
        }
        return this.categoryProductList;
    }

    filterByParentCategoryId(parentCategoryId: number): Product[] {
            return this.productList.filter(p => p.parentCategoryId == parentCategoryId);
    }

}