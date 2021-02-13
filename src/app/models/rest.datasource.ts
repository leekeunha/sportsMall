import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Home } from './home.model';

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {

    constructor(private http: HttpClient, @Inject(REST_URL) private url: string) { }

    getHome(): Observable<Home> {
        return this.http.get<Home>(this.url);
    }
}
