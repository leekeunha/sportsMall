import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsRowComponent } from '../products/productsRow.component';
import { ProductsComponent } from './products.component';
import { CounterDirective } from '../../directives/counter.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [ProductsComponent, ProductsRowComponent, CounterDirective],
    exports: [ProductsComponent, ProductsRowComponent]
})
export class ProductsModule { }