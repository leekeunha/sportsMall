import { Component } from '@angular/core';
import { Repository } from '../../models/repository.model';

@Component({
    selector: 'ngbd-carousel-latest',
    templateUrl: './carouselLatest.component.html',
    styleUrls: ['./carouselLatest.component.css']
})
export class NgbdCarouselLatest {

    public slideProductsList = [];

    constructor(private repository: Repository) {
        this.slideProductsList = repository.getSlideProductList();
    }
}