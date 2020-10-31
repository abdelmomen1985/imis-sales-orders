import config from "../Configs";
import { Get } from "../query/helpers";
import { CustomerType, SalesOrderViewResp } from "../types";

export const getSalesOrdersView = async () => {
  const data = await Get(config.API_URL + "imis/salesorders", {});
  return data as SalesOrderViewResp[];
};

export const getCustomers = async () => {
  let data = await Get(config.API_URL + "imis/customers", {});
  return data as CustomerType[];
};
