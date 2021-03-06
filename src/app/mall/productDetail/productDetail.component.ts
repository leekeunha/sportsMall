import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductDetail } from '../../models/productDetail.model';
import { ProductDetailRepository } from '../../models/productDetailRepository.model';
import { ProductRepository } from '../../models/productRepository.model';
import { Cart } from '../../models/cart.model';

@Component({
    selector: "productDatail",
    templateUrl: "./productDetail.component.html"
})
export class ProductDetailComponent {
    productDetail: ProductDetail;
    product: Product;
    imgUrlList: string[] = new Array<string>();
    public productsPerRow = 2;

    constructor(productDetailRepository: ProductDetailRepository, productRepository: ProductRepository, activeRoute: ActivatedRoute, private cart: Cart, private router:Router) {

        const productId: number = Number(activeRoute.snapshot.url[1].path);

        productDetailRepository.getProductDetailList().subscribe(detailList => {
            this.productDetail = productDetailRepository.getProductDetail(productId);
            this.imgUrlList = this.productDetail.imageList;
        });

        productRepository.getProducts().subscribe(productList => {
            this.product = productRepository.getProduct(productList, productId);
        });
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        //toast 메시지 띄우기
    }
}