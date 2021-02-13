import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Home } from './home.model';
import { Product } from './product.model';
import { ProductList } from './productList.model';

export const REST_URL = new InjectionToken("rest_url");
export const HOME = "home";
export const PRODUCTLIST = "productList";

@Injectable()
export class RestDataSource {

    constructor(private http: HttpClient, @Inject(REST_URL) private url: string) { }

    getHome(): Observable<Home> {
        return this.http.get<Home>(`${this.url}/${HOME}`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.url}/${PRODUCTLIST}`);
    }
}
