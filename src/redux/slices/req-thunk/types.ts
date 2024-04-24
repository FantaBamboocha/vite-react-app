import {
  CategoryEnum,
  SortPropertyEnum,
} from "@redux/slices/search-params/types";

export interface IReqPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: string;
  rating: number;
}

export interface IReqPizzaSlice {
  items: IReqPizza[];
  isLoading: boolean;
  error: string | null | undefined;
}

export interface IFetchDataArgs {
  category: CategoryEnum;
  sortProperty: SortPropertyEnum;
  searchValue: string;
}
