export interface RootState {
  params: {
    category: string;
    sortProperty: string;
    searchValue: string;
  };
  cart: {
    items: {
      id: number;
      title: string;
      price: number;
      imageUrl: string;
      type: string;
      size: number;
      count: number;
    }[];
    totalPrice: number;
    totalCount: number;
  };
  pizza: {
    items: {
      id: number;
      title: string;
      price: number;
      imageUrl: string;
      type: string;
      size: number;
      count: number;
    }[];
    isLoading: boolean;
    error: null | string;
  };
}
