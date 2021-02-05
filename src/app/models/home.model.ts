import { Product } from './product.model';
import { Banner } from './banner.model';

export class Home {
    constructor() { }

    public bannerImageList: Banner[];
    public latestGarmentList: Product[];
}