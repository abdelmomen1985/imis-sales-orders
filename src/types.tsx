export type ProductType = {
  GUID: string;
  ArabicDescription: string;
  Img: string;
  SpecificationId: string;
  UOMID: string;
  UOMArabicDescription: string;
  Code: string;
  DefaultSalePrice: string;
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

export type SalesOrderType = {
  GUID: string;
  SerialNo: string;
  confirmed: boolean;
  customer: CustomerType;
  details: SalesOrderDetailType[];
};

export type SalesOrderViewResp = {
  GUID: string;
  Qnt: string;
  TotalValue: string;
  SerialNo: string;
  CustomerName: string;
  ItemName: string;
  ConfirmationLevel: string;
  CustomerID: string;
  ItemID: string;
  UOMID: string;
};

export type SalesOrderDetailType = {
  product: ProductType;
  count: number;
  specElements: ProductSpecElementType[];
};

export type SoSqDetailsResponseType = {
  detailIndex: number;
  GUID: string;
};

export type PriceOfferDetailType = {
  product: ProductType;
  count: number;
  specElements: ProductSpecElementType[];
};

export type PriceOfferType = {
  GUID: string;
  SerialNo: string;
  confirmed: boolean;
  customer: CustomerType;
  details: PriceOfferDetailType[];
};
