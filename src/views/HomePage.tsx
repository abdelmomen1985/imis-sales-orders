import React from "react";
import SelectCustomer from "../components/customers/SelectCustomer";
import ProductsList from "../components/products/ProductsList";
import SOButton from "../components/salesorder/SOButton";

export default function HomePage() {
  return (
    <>
      <SelectCustomer />
      <ProductsList onRefreshMe={() => {}} refresh={0} />
      <SOButton />
    </>
  );
}
