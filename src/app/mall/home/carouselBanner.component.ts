import { Component } from '@angular/core';
import { HomeRepository } from '../../models/homeRepository.model';

@Component({
    selector: 'ngbd-carousel-banner',
    templateUrl: './carouselBanner.component.html',
    styleUrls: ['./carouselBanner.component.css']
})
export class NgbdCarouselBanner {

    public images = [];

    constructor(private repository: HomeRepository) {
        this.images = repository.getBannerImageUrlList();
    }
}