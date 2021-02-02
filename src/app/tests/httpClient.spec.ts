import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { ParentCategory } from "../models/parentCategory.model";
import { HttpClient } from '../client/httpClient';

describe("HttpClient Test Environment", () => {
    it("should return a list of products JSON objects", () => {
        const httpClient: HttpClient = new HttpClient();
        expect(httpClient.getProducts()).toEqual(jasmine.arrayContaining([{
            "productId": 32,
            "productName": "Nike Flight",
            "soldOut": false,
            "price": 160,
            "numOfColors": 1,
            "imageUrl": "./product/nike_flight_main.jpg",
            "parentCategoryId": 5,
            "categoryId": 2
                }
            ]
        ));
    });
    it("should return parent categories list of products JSON objects", () => {
        const httpClient: HttpClient = new HttpClient();
        expect(httpClient.getParentCategories()).toEqual(jasmine.arrayContaining([{
            "id": 1,
            "name": "Shoes",
            "categories": [
              {
                "categoryId": 1,
                "categoryName": "Basketball"
              },
              {
                "categoryId": 2,
                "categoryName": "Football"
              },
              {
                "categoryId": 3,
                "categoryName": "Soccer"
              },
              {
                "categoryId": 4,
                "categoryName": "Tennis"
              },
              {
                "categoryId": 5,
                "categoryName": "Baseball"
              }
            ]
    }]));
    });

    it("should return a products by id JSON object", () => {
        const httpClient: HttpClient = new HttpClient();
        expect(httpClient.getProductById(1)).toEqual({ productId: 1, productName: 'Lebron 18 Black/Electric Green', soldOut: false, price: 200, numOfColors: 4, imageUrl: './product/lebron_18_black_electric_green_main.jpg', parentCategoryId: 1, categoryId: 1 });
    });

    it("should return parent categories by parentCategoryId JSON objects", () => {
        const httpClient: HttpClient = new HttpClient();
        const productList: Product[] = httpClient.getProducts();

        console.log(httpClient.filterByParentCategoryId(productList, 1));
        expect(httpClient.filterByParentCategoryId(productList, 1)).toEqual(jasmine.arrayContaining(
        [
            {
                "productId": 3,
                "productName": "Nike Vapor Edge Elite 360 OBJ",
                "soldOut": false,
                "price": 170.97,
                "numOfColors": 1,
                "imageUrl": "/product/nike_vapor_edge_elite_360_obj_main.jpg",
                "parentCategoryId": 1,
                "categoryId": 2
        }]));
    });
    it("should return a product by name JSON objects", () => {
        const httpClient: HttpClient = new HttpClient();
        const productList: Product[] = httpClient.getProducts();
        expect(httpClient.filterByName(productList, "Kyrie 7 Rayguns").productId).toBe(2);
    });
    it("should return products with price range of 250 to 300 JSON objects", () => {
        const httpClient: HttpClient = new HttpClient();
        let productList: Product[] = httpClient.getProducts();
        expect(httpClient.filterByPriceRange(productList, 250, 300)).toEqual(jasmine.arrayContaining(
            [
                {
                    "productId": 6,
                    "productName": "Nike Phantom Scorpion Elite Dynamic Fit FG",
                    "soldOut": false,
                    "price": 265.97,
                    "numOfColors": 1,
                    "imageUrl": "./product/nike_phantom_corpion_elite_dynamic_fig_fg_main.jpg",
                    "parentCategoryId": 1,
                    "categoryId": 3
                }
            ]));
    });
});
