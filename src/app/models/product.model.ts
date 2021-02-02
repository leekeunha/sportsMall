export class Product
{
    constructor(productId, productName, soldOut, price, numOfColors, imageUrl, parentCategoryId, categoryId) { }

    public productId?: number;
    public productName: string;
    public soldOut: boolean;
    public price: number;
    public numOfColors: number;
    public imageUrl: string;
    public parentCategoryId: number;
    public categoryId: number;
}