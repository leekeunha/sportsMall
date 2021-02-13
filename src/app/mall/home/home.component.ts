import { Component } from '@angular/core';
import { Banner } from '../../models/banner.model';
import { Home } from '../../models/home.model';
import { RestDataSource } from '../../models/rest.datasource';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public homeModel: Home = new Home();
    public bannerList: Banner[];
    public bannerImagePath: string;

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getHome().subscribe(data => {
            this.homeModel = data
            this.bannerList = this.homeModel.bannerList;
            this.bannerImagePath = this.bannerList[0].imageUrl;
            this.homeModel.latestGarmentList[0].imageUrl;
            this.homeModel.latestGarmentList[1].imageUrl;
            this.homeModel.latestGarmentList[2].imageUrl;
        });
    }
}
