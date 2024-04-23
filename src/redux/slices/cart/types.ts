export interface IPizzaCart {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

export interface ICartSliceState {
  items: IPizzaCart[];
  totalPrice: number;
  totalCount: number;
}
