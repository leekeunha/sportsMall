export class Product
{
    constructor(product_id, product_name, sold_out, price, num_of_colors, image_url, parent_category_id, category_id) { }

    public product_id?: number;
    public product_name: string;
    public sold_out: boolean;
    public price: number;
    public num_of_colors: number;
    public image_url: string;
    public parent_category_id: number;
    public category_id: number;
}