import { Product } from './product.model';
import { Banner } from './banner.model';

export class Home {
    constructor() { }

    public bannerList: Banner[];
    public latestGarmentList: Product[];
}