import React, { useEffect } from "react";
import ProductsList from "../components/products/ProductsList";
import SOButton from "../components/salesorder/SOButton";
import { getSalesOrdersView } from "../queries";
import { SalesOrderType } from "../types";

export default function SalesOrdersPage() {
  useEffect(() => {
    const salesOrders: SalesOrderType[] = [];

    getSalesOrdersView().then((data) => {
      data.forEach((one) => {
        let index = salesOrders.findIndex((x) => one.GUID === x.GUID);
        if (index < 0) salesOrders.push({ GUID: one.GUID } as SalesOrderType);
        else salesOrders[index] = { ...salesOrders[index], SerialNo: "twice" };
      });
      console.log("%c Mo2Log salesOrders ", "background: #bada55", salesOrders);
    });
  }, []);
  return (
    <>
      <ProductsList onRefreshMe={() => {}} refresh={0} />
      <SOButton />{" "}
    </>
  );
}
