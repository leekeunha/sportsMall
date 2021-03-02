import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './productDetail.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ProductDetailComponent],
    exports: [ProductDetailComponent]
})
export class ProductDetailModule { }