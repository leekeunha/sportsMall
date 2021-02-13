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
    public productsPerSlide = 3;

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getHome().subscribe(data => {

            data.latestGarmentList.forEach((item, index) => {
                this.latestGarmentList[index] = item;
            });

            this.setSlideProductList();
        });
    }

    setSlideProductList() {
        let arrayCopy = [...this.latestGarmentList]

        while (arrayCopy.length > 0) {
            this.slideList.push(arrayCopy.splice(0, this.productsPerSlide))
        }
    }

}