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
    productDetail: ProductDetail;
    product: Product;
    imgUrlList: string[] = new Array<string>();

    constructor(productDetailRepository: ProductDetailRepository, productRepository: ProductRepository, activeRoute: ActivatedRoute, ) {

        const productId: number = Number(activeRoute.snapshot.url[1].path);

        productDetailRepository.getProductDetailList().subscribe(detailList => {
            
            const productDetails: ProductDetail[] = detailList;
            this.productDetail = productDetailRepository.getProductDetail(productDetails, productId);
            this.imgUrlList = this.productDetail.imageList;
        });

        productRepository.getProducts().subscribe(productList => {
            this.product = productRepository.getProduct(productList, productId);
        });

    }

    
}