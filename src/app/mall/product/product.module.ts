import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, RouterModule],
    declarations: [ProductComponent],
    exports: [ProductComponent]
})
export class ProductModule { }