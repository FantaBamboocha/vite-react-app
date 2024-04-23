export enum CategoryEnum {
  ALL = "all",
  MEAT = "meat",
  SPICY = "spicy",
  VEGETARIAN = "vegetarian",
  GRILL = "grill",
  CLOSED = "closed",
}

export enum SortPropertyEnum {
  "популярности" = "rating",
  "возрастанию цены" = "priceUp",
  "убыванию цены" = "priceDown",
}

export interface ISearchParams {
  category: CategoryEnum;
  sortProperty: SortPropertyEnum;
  searchValue: string;
}
