import { types } from "util";

export type ProductType = {
  GUID: string;
  ArabicDescription: string;
};

export type CustomerType = {
  GUID: string;
  Name: string;
};

export type ProductSpecElementType = {
  ArabicDescription: string;
  GUID: string;
  CategoryId: string;
  InputType: number;
  Pattern: string;
  UnitId: string;
  MinValue: number;
  MaxValue: number;
  value: string | number;
  valueLabel: string;
};

export type ProductSpecDetailType = {
  ArabicDescription: string;
  GUID: string;
};

export type SalesOrderDetailType = {
  product: ProductType;
  count: number;
  specElements: ProductSpecElementType[];
};

export type SalesOrderType = {
  customer: CustomerType;
  details: SalesOrderDetailType[];
};
