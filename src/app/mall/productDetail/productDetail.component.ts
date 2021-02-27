import { Component, Input } from "@angular/core";
import { Product } from '../../models/product.model';

@Component({
    selector: "productDatail",
    templateUrl: "./productDetail.component.html"
})
export class ProductDetailComponent {
    constructor() {
        console.log('ProductDetailComponent');
        debugger;
    }
}