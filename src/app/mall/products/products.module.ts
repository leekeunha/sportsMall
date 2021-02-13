import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsRowComponent } from '../products/productsRow.component';
import { ProductsComponent } from './products.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ProductsComponent, ProductsRowComponent],
    exports: [ProductsComponent, ProductsRowComponent]
})
export class ProductsModule { }