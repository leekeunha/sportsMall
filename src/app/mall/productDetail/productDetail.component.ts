import { Component, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductDetail } from '../../models/productDetail.model';
import { ProductDetailRepository } from '../../models/productDetailRepository.model';
import { ProductRepository } from '../../models/productRepository.model';

@Component({
    selector: "productDatail",
    templateUrl: "./productDetail.component.html"
})
export class ProductDetailComponent {
    productDetailList: ProductDetail[];
    product: Product;

    constructor(productDetailRepository: ProductDetailRepository, productRepository: ProductRepository, activeRoute: ActivatedRoute,) {
        debugger;
        const productId :number = Number(activeRoute.snapshot.url[1].path);
        debugger;
        productDetailRepository.getProductDetailList().subscribe(productDetailList => {
            debugger;
            this.productDetailList = productDetailList;
        });

        this.product = productRepository.getProduct(productId);
        console.log(this.product);
        debugger;

    }

    
}