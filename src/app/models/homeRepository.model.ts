import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Banner } from './banner.model';

@Injectable()
export class HomeRepository {

    constructor(private dataSource: RestDataSource) {
    }

    getBannerList(): Banner[] {
        return this.dataSource.getBannerList();
    }

    getBannerImageUrlList():string[] {
        return this.dataSource.getBannerImageUrlList();
    }
}