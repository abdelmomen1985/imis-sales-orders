import { Card } from "antd";
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import SOFooterButtons from "../components/salesorder/SOFooterButtons";
import { AppContext } from "../context/AppContextProvider";
import { SalesOrderType } from "../types";

interface CartPageProps extends RouteComponentProps {}

export default function CartPage({ history }: CartPageProps) {
  const { salesOrder, setSalesOrder } = useContext(AppContext);
  const submitSalesOrder = () => {
    // so_type: 01001-105C50CF-8CC5-4627-82B5-80DD3E660189
    // customer: 01001-D808105D-C2D1-450E-AB8F-446478FC7313
    // date: 2020-10-20
    // curreny: 01001-D0DA0215-C43C-40F7-B63C-D0F46447DA7C
    // rate: 1,
    // created by 1
  };
  const deleteSalesOrder = () => {
    localStorage.removeItem("SALES_ORDER");
    setSalesOrder({} as SalesOrderType);
    history.push("/");
  };
  console.log("%c Mo2Log salesOrder ", "background: #bada55", salesOrder);
  return (
    <>
      <Card>
        <h3>امر بيع لصالح {salesOrder.customer.Name}</h3>
      </Card>
      {salesOrder.details.map((soDetail, index) => (
        <Card key={index}>
          <h3>
            عدد: {soDetail.count} - صنف {soDetail.product.ArabicDescription}
          </h3>
          {soDetail.specElements.map((element) => (
            <Card
              key={element.GUID}
              bodyStyle={{ padding: "16px" }}
              style={{
                backgroundColor: "#f5e6fdb3",
                marginBottom: "8px",
              }}
            >
              <h4>
                {element.ArabicDescription} :{" "}
                {element.valueLabel ? element.valueLabel : element.value}
                {element.UnitId ===
                  "01001-AD06DE17-6E8E-4B82-9F0F-401ED621A888" && (
                  <span> (سـم) </span>
                )}
              </h4>
            </Card>
          ))}
        </Card>
      ))}
      <SOFooterButtons
        onSubmit={submitSalesOrder}
        onDelete={deleteSalesOrder}
      />
    </>
  );
}
