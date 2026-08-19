export interface Order{
    id: number;
    productId: number;
    productName: string;
    productPrice: number;
    quantity: number;
    totalPrice: number;
    createDate: Date;
}