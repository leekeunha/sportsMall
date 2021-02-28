import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource, REST_URL } from './rest.datasource';
import { HomeRepository } from './homeRepository.model';
import { CategoryRepository } from './categoryRepository.model';
import { ProductRepository } from './productRepository.model';
import { ProductDetailRepository } from './productDetailRepository.model';

@NgModule({
    imports: [HttpClientModule],
    providers: [HomeRepository, CategoryRepository, ProductRepository, RestDataSource, ProductDetailRepository,
        {
            provide: REST_URL, useValue: `http://${location.hostname}:3500`
        }]
})
export class ModelModule { }