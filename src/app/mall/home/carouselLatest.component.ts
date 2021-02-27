import { Component } from '@angular/core';
import { ProductRepository } from '../../models/productRepository.model';

@Component({
    selector: 'ngbd-carousel-latest',
    templateUrl: './carouselLatest.component.html',
    styleUrls: ['./carouselLatest.component.css']
})
export class NgbdCarouselLatest {

    public slideProductsList = [];

    constructor(private repository: ProductRepository) {
        this.slideProductsList = repository.getSlideProductList();
    }
}