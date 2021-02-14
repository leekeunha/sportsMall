import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ProductComponent],
    exports: [ProductComponent]
})
export class ProductModule { }