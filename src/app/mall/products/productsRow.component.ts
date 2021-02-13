import { Component, Input } from "@angular/core";

@Component({
    selector: "products-row",
    templateUrl: "./productsRow.component.html"
})
export class ProductsRowComponent {

    @Input("model")
    productList: [];

    constructor() {}
}