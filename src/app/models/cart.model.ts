import { ProductModel } from './product.model';

export class CartModel {
    public products: ProductModel[] = [];
    public productEdit: ProductModel = undefined;
    public total: number = 0;
}