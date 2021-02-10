import { Component } from '@angular/core';

@Component({
    selector: 'ngbd-carousel-banner',
    templateUrl: './carouselBanner.component.html',
})
export class NgbdCarouselBanner {
    
    //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    images: string[]; 
    constructor() {
        this.images = [
            '/assets/images/home/banner/nike_air_force1_banner.png',
            '/assets/images/home/banner/nike_fc-awf.png',
            '/assets/images/home/banner/nike_react_finitiry_run_flyknit_2.png'
        ];
    }
}