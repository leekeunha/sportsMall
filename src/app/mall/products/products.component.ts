import { Component, Input } from "@angular/core";
import { RestDataSource } from '../../models/rest.datasource';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "products",
    templateUrl: "./products.component.html"
})


export class ProductsComponent {

    public cateogryProductList: Product[];
    public productsPerPage = 9;
    public productsPerRow = 3;
    public selectedPage = 1;
    
    public rowProductGroupList = [];

    constructor(private dataSource: RestDataSource, activeRoute: ActivatedRoute) {
        this.dataSource.getProducts().subscribe(data => {

            let allProducts: Product[] = data;
            this.FilterCategoryProductList(allProducts,activeRoute);
            this.rowProductGroupList = this.getRowProductGroup();
            console.log(this.rowProductGroupList);
            debugger;
        });
    }

    FilterCategoryProductList(allProducts: Product[], activeRoute: ActivatedRoute) {

        let category: string = activeRoute.snapshot.url[1].path;
        switch (category) {
            case "shoes":
                this.cateogryProductList = this.filterByParentCategoryId(allProducts, 1);
                break;
            case "tops":
                this.cateogryProductList = this.filterByParentCategoryId(allProducts, 2);
                break;
            case "pants":
                this.cateogryProductList = this.filterByParentCategoryId(allProducts, 3);
                break;
            case "swimwear":
                this.cateogryProductList = this.filterByParentCategoryId(allProducts, 4);
                break;
            case "accesories":
                this.cateogryProductList = this.filterByParentCategoryId(allProducts, 5);
                break;
            default:
                break;
        }
    }

    getRowProductGroup() {

        let result = []
        let arrayCopy = [...this.products]

        while (arrayCopy.length > 0) {
            result.push(arrayCopy.splice(0, this.productsPerRow))
        }
        return result
    }

    filterByParentCategoryId(productList: Product[], parentCategoryId: number): Product[] {
        return productList.filter(p => p.parentCategoryId == parentCategoryId);
    }

    get rowProductGroup(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.rowProductGroupList.slice(pageIndex, pageIndex + this.productsPerRow);
    }

    get products(): Product[] {

        let pageIndex = (this.selectedPage - 1) * this.productsPerPage

        return this.cateogryProductList.slice(pageIndex, pageIndex + this.productsPerPage);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
        debugger;
    }

    get pageNumbers(): number[] {
        let result = Array(Math.ceil(this.cateogryProductList.length / this.productsPerPage)).fill(0).map((x, i) => i + 1);
        return result;
    }
}