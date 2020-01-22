import { ProductState } from './product.model';

export class CartModel {
    public products: ProductState[] = [];
    public productEdit: ProductState = undefined;
    public total: number = 0;
}