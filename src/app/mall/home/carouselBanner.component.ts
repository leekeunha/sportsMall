import { Component } from '@angular/core';
import { RestDataSource } from '../../models/rest.datasource';

@Component({
    selector: 'ngbd-carousel-banner',
    templateUrl: './carouselBanner.component.html',
})
export class NgbdCarouselBanner {

    public images = [];

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getHome().subscribe(data => {
            data.bannerList.forEach((item, index) => {
                this.images[index] = item.imageUrl;
            })
        });
    }
}