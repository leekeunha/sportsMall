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

    //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    //images: string[];
    //constructor() {
    //    this.images = [
    //        '/assets/images/home/latestGarment/Nike_Air_Vapormax_2020_FlyKnit_1.png',
    //        '/assets/images/home/latestGarment/nike_flight.png',
    //        '/assets/images/home/latestGarment/nike_heritage_2.png',
    //        '/assets/images/home/latestGarment/nike_mercurial_vapor_14_elite_FG.png',
    //        '/assets/images/home/latestGarment/nike_air_jordan_7_letro.png',
    //        '/assets/images/home/latestGarment/nike_fc-nike_flight.png',
    //        '/assets/images/home/latestGarment/nike_heritage_2.png',
    //        '/assets/images/home/latestGarment/nike_mercurial_vapor_14_elite_FG.png',
    //        '/assets/images/home/latestGarment/nike_heritage_2.png'
    //    ];
    //}

    public homeModel: Home = new Home();
    public bannerList: Banner[];
    public bannerImagePath: string;

    images: string[];
    constructor(private dataSource: RestDataSource) {
        this.dataSource.getHome().subscribe(data => {
            debugger;
            this.homeModel = data
            //this.bannerList = this.homeModel.bannerList;
            //this.bannerImagePath = this.bannerList[0].imageUrl;
            //this.homeModel.latestGarmentList[0].imageUrl;
            //this.homeModel.latestGarmentList[1].imageUrl;
            //this.homeModel.latestGarmentList[2].imageUrl;

            this.images = [
                this.homeModel.latestGarmentList[0].imageUrl,
                this.homeModel.latestGarmentList[1].imageUrl,
                this.homeModel.latestGarmentList[2].imageUrl,
                this.homeModel.latestGarmentList[3].imageUrl,
                this.homeModel.latestGarmentList[4].imageUrl,
                this.homeModel.latestGarmentList[5].imageUrl,
                this.homeModel.latestGarmentList[6].imageUrl,
                this.homeModel.latestGarmentList[7].imageUrl,
                this.homeModel.latestGarmentList[8].imageUrl,
            ];
        });
    }
}