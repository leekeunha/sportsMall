import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Home } from './home.model';
import { Product } from './product.model';
import { Banner } from './banner.model';
import { ParentCategory } from './parentCategory.model';
import { Category } from './category.model';
import { ProductDetail } from './productDetail.model';
import { Order } from './order.model';

export const REST_URL = new InjectionToken("rest_url");
const HOME = "home";
const PRODUCT_LIST = "productList"; 
const PARENT_CATEGORY_LIST = "parentCategoryList";
const PRODUCT_DETAIL_LIST = "productDetailList";

@Injectable()
export class RestDataSource {

    private slideProductsList = [];
    private productsPerSlide = 3;
    private bannerList = new Array<Banner>();
    private latestGarmentList = new Array<Product>();
    private bannerImageUrlList = [];
    private categoryList: Category[] = new Array();
    private parentCategoryList: ParentCategory[] = new Array();
    private productList : Product[];
    private productDetailList: ProductDetail[];

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

        this.getParentCategories().subscribe(parentCategoryList => {
            this.parentCategoryList =parentCategoryList;
        });

        this.getProductDetailList().subscribe(productDetailList => {
            this.productDetailList = productDetailList;
        });
    }

    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.url}/${HOME}`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.url}/${PRODUCT_LIST}`);
    }

    getParentCategories(): Observable<ParentCategory[]> {
        return this.http.get<ParentCategory[]>(`${this.url}/${PARENT_CATEGORY_LIST}`);
    }

    getProductDetailList(): Observable<ProductDetail[]> {
        return this.http.get<ProductDetail[]>(`${this.url}/${PRODUCT_DETAIL_LIST}`);
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


    getChildCategories(parentCategoryName: string): Category[] {
        const parentCategoryId: number = this.getParentCategoryId(parentCategoryName);
        this.categoryList = this.findCategoriesByParentCategoryId(parentCategoryId);
        return this.categoryList;
    }

    findCategoriesByParentCategoryId(parentCategoryId: number): Category[] {
        const parentCategory: ParentCategory = this.parentCategoryList.find(p => p.id == parentCategoryId);
        return parentCategory.categoryList;
    }

    getParentCategoryId(parentCategoryName: string): number {

        let parentCategoryId: number;
        switch (parentCategoryName) {
            case "shoes":
                parentCategoryId = 1;
                break;
            case "tops":
                parentCategoryId = 2;
                break;
            case "pants":
                parentCategoryId = 3;
                break;
            case "swimwear":
                parentCategoryId = 4;
                break;
            case "accesories":
                parentCategoryId = 5;
                break;
            default:
                break;
        }
        return parentCategoryId;
    }

    getProductsByParentCategoryName(parentCategoryName: string): Product[] {

        const parentCategoryId: number = this.getParentCategoryId(parentCategoryName);
        const productList: Product[] = this.getProductsByParentCategoryId(parentCategoryId);
        
        return productList;
    }

    getProduct(productList: Product[], productId: number): Product {
        return productList.find(p => productId == p.productId);
    }

    getProductsByParentCategoryId(parentCategoryId: number): Product[]{
        let filteredproducts:Product[];
        filteredproducts = this.productList.filter(p => p.parentCategoryId == parentCategoryId);
        return filteredproducts;
    }

    getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName: string, childCategoryId: number): Product[] {
        const products: Product[] = this.getProductsByParentCategoryName( parentCategoryName)
        return products.filter(p => p.categoryId == childCategoryId);
    }

    getProductDetail(productId: number): ProductDetail {
        return this.productDetailList.find(p => p.productId == productId);
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(REST_URL + "/orders", order);
    }
}