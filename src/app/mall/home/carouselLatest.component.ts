import { Component } from '@angular/core';
import { Home } from '../../models/home.model';
import { Banner } from '../../models/banner.model';
import { RestDataSource } from '../../models/rest.datasource';

@Component({
    selector: 'ngbd-carousel-latest',
    templateUrl: './carouselLatest.component.html',
    styleUrls: ['./carouselLatest.component.css']
})
export class NgbdCarouselLatest {

    public latestGarmentList = [];
    public slideList = [];

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getHome().subscribe(data => {

            data.latestGarmentList.forEach((item, index) => {
                this.latestGarmentList[index] = item;
            });

            this.setSlides();
        });
    }

    setSlides() {
        this.setEachSlide(0, 3);
        this.setEachSlide(3, 6);
        this.setEachSlide(6, 9);
    }

    setEachSlide(startIndex: number, endIndex: number) {

        let latestGarmentList = [];
        let index = 0;

        for (var i = startIndex; i < endIndex; i++) {
            latestGarmentList[index] = this.latestGarmentList[i];
            index++;
        }

        this.slideList.push(latestGarmentList);
    }
}