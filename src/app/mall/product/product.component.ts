import { Component, Input } from "@angular/core";
import { Product } from '../../models/product.model';

@Component({
    selector: "product",
    templateUrl: "./product.component.html"
})
export class ProductComponent {

    @Input()
    public model: Product;

    constructor() { }

    get productName(): string{
        return this.model.productName;
    }

    get imageUrl(): string {
        return this.model.imageUrl;
    }

    get price(): number {
        return this.model.price;
    }
}