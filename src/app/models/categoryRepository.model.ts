import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';
import { Banner } from './banner.model';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { ParentCategory } from './parentCategory.model';

@Injectable()
export class CategoryRepository {

    constructor(private dataSource: RestDataSource) {
    }

    getChildCategories(parentCategoryName: string): Category[] {
        return this.dataSource.getChildCategories(parentCategoryName);
    }

    getParentCategories(): Observable<ParentCategory[]> {
        return this.dataSource.getParentCategories();
    }
}