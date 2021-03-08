import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource, REST_URL } from './rest.datasource';
import { HomeRepository } from './homeRepository.model';
import { CategoryRepository } from './categoryRepository.model';
import { ProductRepository } from './productRepository.model';
import { ProductDetailRepository } from './productDetailRepository.model';
import { Cart } from './cart.model';
import { OrderRepository } from './orderRepositoy.model';
import { Order } from './order.model';

@NgModule({
    imports: [HttpClientModule],
    providers: [HomeRepository, CategoryRepository, ProductRepository, RestDataSource, ProductDetailRepository, Cart, Order, OrderRepository,
        {
            provide: REST_URL, useValue: `https://sportsmallapi.herokuapp.com`
        }]
})
export class ModelModule { }