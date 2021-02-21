import { Category } from './category.model';

export class ParentCategory {
    constructor() { }

    public id?: number;
    public name: string;
    public categoryList: Category[];
}