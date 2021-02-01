import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { ParentCategory } from "../models/parentCategory.model";
import { HttpClient } from '../httpClient';

describe("Jasmine Test Environment", () => {
    it("test getProducts function", () => {
        let httpClient: HttpClient = new HttpClient();
        expect(httpClient.getProducts().length).toBe(38);
    });
    it("test getParentCategories function", () => {
        let httpClient: HttpClient = new HttpClient();
        expect(httpClient.getParentCategories().length).toBe(5);
    });
    it("test getProductById function", () => {
        let httpClient: HttpClient = new HttpClient();
        expect(httpClient.getProductById(1).product_id).toBe(1);
    });
    it("test filterByParentCategoryId function", () => {
        let httpClient: HttpClient = new HttpClient();
        let productList: Product[] = httpClient.getProducts();
        expect(httpClient.filterByParentCategoryId(productList,1).length).toBe(10);
    });
    it("test filterByName function", () => {
        let httpClient: HttpClient = new HttpClient();
        let productList: Product[] = httpClient.getProducts();
        expect(httpClient.filterByName(productList, "Kyrie 7 Rayguns").product_id).toBe(2);
    });
    it("test filterByPriceRange function", () => {
        let httpClient: HttpClient = new HttpClient();
        let productList: Product[] = httpClient.getProducts();
        expect(httpClient.filterByPriceRange(productList, 250, 300).length).toBe(2);
    });

});
