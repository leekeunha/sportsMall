import { Component, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../../models/repository.model';
import { Product } from '../../models/product.model';
import { CounterDirective } from '../../directives/counter.directive';

@Component({
    selector: "category",
    templateUrl: "./category.component.html"
})
export class CategoryComponent {

    public cateogryProductList: Product[];
    public productsPerPage = 9;
    public productsPerRow = 3;
    public selectedPage = 1;

    constructor(private repository: Repository, activeRoute: ActivatedRoute) {
        let category: string = activeRoute.snapshot.url[1].path;
        this.cateogryProductList = repository.getSelectedCategoryProductList(category);
        //debugger;
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.cateogryProductList.slice(pageIndex, pageIndex + this.productsPerPage);
    }


    changePage(newPage: number) {
        this.selectedPage = newPage;
        
    }

    get pageCount(): number {
        return Math.ceil(this.cateogryProductList.length / this.productsPerPage);
    }
}