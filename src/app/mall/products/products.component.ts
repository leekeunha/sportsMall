import { Component, Input } from "@angular/core";
import { RestDataSource } from '../../models/rest.datasource';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "products",
    templateUrl: "./products.component.html"
})


export class ProductsComponent {

    @Input() item;
    public productList: Product[] = new Array<Product>();
    public productListInCategory: Product[];

    constructor(private dataSource: RestDataSource, activeRoute: ActivatedRoute) {
        this.dataSource.getProducts().subscribe(data => {
            this.productList = data;
            let category: string = activeRoute.snapshot.url[1].path;
            debugger;
            if (category == "shoes") {
                this.productListInCategory = this.filterByParentCategoryId(1);
            }
        });
    }

    filterByParentCategoryId(parentCategoryId: number): Product[] {
        return this.productList.filter(p => p.parentCategoryId == parentCategoryId);
    }
   
}