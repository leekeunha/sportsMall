import { Component } from '@angular/core';
import { Repository } from '../../models/repository.model';

@Component({
    selector: 'ngbd-carousel-banner',
    templateUrl: './carouselBanner.component.html',
    styleUrls: ['./carouselBanner.component.css']
})
export class NgbdCarouselBanner {

    public images = [];

    constructor(private repository: Repository) {
        this.images = repository.getBannerImageUrlList();
    }
}