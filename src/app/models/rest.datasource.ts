import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Home } from './home.model';
import { Product } from './product.model';
import { Banner } from './banner.model';
import { ParentCategory } from './parentCategory.model';
import { Category } from './category.model';
import { ProductDetail } from './productDetail.model';

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
    private productList: Product[] = new Array();
    private parentCategoryList: ParentCategory[] = new Array();
    private productDetailList: ProductDetail[] = new Array();
    private categoryList: Category[] = new Array();

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
            this.parentCategoryList = parentCategoryList;
        });

        //this.getProductDetailList().subscribe(productDetailList => {
        //    this.productDetailList = productDetailList;
        //});
    }

    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.url}/${HOME}`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.url}/${PRODUCT_LIST}`);
    }

    getParentCategories(): Observable <ParentCategory[]> {
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

    getProductsByParentCategoryName(parentCategoryName: string): Product[]{
        let productList :Product[];
        switch (parentCategoryName) {
            case "shoes":
                productList = this.filterProductsByParentCategoryId(1);
                break;
            case "tops":
                productList = this.filterProductsByParentCategoryId(2);
                break;
            case "pants":
                productList = this.filterProductsByParentCategoryId(3);
                break;
            case "swimwear":
                productList = this.filterProductsByParentCategoryId(4);
                break;
            case "accesories":
                productList = this.filterProductsByParentCategoryId(5);
                break;
            default:
                break;
        }
        return productList;
    }

    getChildCategories(parentCategory: string): Category[] {

        switch (parentCategory) {
            case "shoes":
                this.categoryList = this.findCategoriesByParentCategoryId(1);
                break;
            case "tops":
                this.categoryList = this.findCategoriesByParentCategoryId(2);
                break;
            case "pants":
                this.categoryList = this.findCategoriesByParentCategoryId(3);
                break;
            case "swimwear":
                this.categoryList = this.findCategoriesByParentCategoryId(4);
                break;
            case "accesories":
                this.categoryList = this.findCategoriesByParentCategoryId(5);
                break;
            default:
                break;
        }
        return this.categoryList;
    }

    findCategoriesByParentCategoryId(parentCategoryId: number): Category[] {
        const parentCategory: ParentCategory = this.parentCategoryList.find(p => p.id == parentCategoryId);
        return parentCategory.categoryList;
    }

    filterProductsByParentCategoryId(parentCategoryId: number): Product[] {
        return this.productList.filter(p => p.parentCategoryId == parentCategoryId);
    }

    getProduct(productId: number): Product {
        return this.productList.find(p => productId == p.productId);
    }

    getProductsByParentCategoryNameAndChildCategoryId(parentCategoryName: string, childCategoryId: number): Product[] {
        const products: Product[] = this.getProductsByParentCategoryName(parentCategoryName)
        return products.filter(p => p.categoryId == childCategoryId);
    }


}