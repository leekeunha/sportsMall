import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Home } from './home.model';
import { Product } from './product.model';
import { Banner } from './banner.model';
import { ParentCategory } from './parentCategory.model';
import { Category } from './category.model';

export const REST_URL = new InjectionToken("rest_url");
const HOME = "home";
const PRODUCTLIST = "productList";
const PARENTCATEGORYLIST = "parentCategoryList";

@Injectable()
export class RestDataSource {

    private slideProductsList = [];
    private productsPerSlide = 3;
    private bannerList = new Array<Banner>();
    private latestGarmentList = new Array<Product>();
    private bannerImageUrlList = [];
    private parentCategoryProductList : Product[];
    private productList: Product[] = new Array();
    private parentCategoryList: ParentCategory[] = new Array();
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
        })
    }

    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.url}/${HOME}`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.url}/${PRODUCTLIST}`);
    }

    getParentCategories(): Observable <ParentCategory[]> {
        return this.http.get<ParentCategory[]>(`${this.url}/${PARENTCATEGORYLIST}`);
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

    getProductListInParentCategory(parentCategory: string): Product[]{

        switch (parentCategory) {
            case "shoes":
                this.parentCategoryProductList = this.filterProductsByParentCategoryId(1);
                break;
            case "tops":
                this.parentCategoryProductList = this.filterProductsByParentCategoryId(2);
                break;
            case "pants":
                this.parentCategoryProductList = this.filterProductsByParentCategoryId(3);
                break;
            case "swimwear":
                this.parentCategoryProductList = this.filterProductsByParentCategoryId(4);
                break;
            case "accesories":
                this.parentCategoryProductList = this.filterProductsByParentCategoryId(5);
                break;
            default:
                break;
        }
        return this.parentCategoryProductList;
    }

    getCategoryListInParentCategory(parentCategory: string): Category[] {

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

    getProductsByCategoryIdInParent(categoryId: number): Product[] {
        return this.filterProductsByCategoryIdInParent(categoryId);
    }

    filterProductsByParentCategoryId(parentCategoryId: number): Product[] {
        return this.productList.filter(p => p.parentCategoryId == parentCategoryId);
    }

    findCategoriesByParentCategoryId(parentCategoryId: number): Category[] {
        let parentCategory: ParentCategory = this.parentCategoryList.find(p => p.id == parentCategoryId);
        return parentCategory.categoryList;
    }

    filterProductsByCategoryIdInParent(categoryId: number): Product[] {
        return this.parentCategoryProductList.filter(p => p.categoryId == categoryId);
    }

}