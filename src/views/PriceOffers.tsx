import React from "react";
import POButton from "../components/priceoffer/POButton";
import ProductsCarousel from "../components/products/ProductsCarousel";
import { Card, Tabs, Tag } from "antd";
import { mokSalesQuotationArr } from "../data/mock";
import { CheckCircleOutlined, SyncOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function PriceOffers() {
  return (
    <>
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="عرض اسعار جديد" key="1">
            <ProductsCarousel />
          </TabPane>
          <TabPane tab="العروض السابقة" key="2">
            {mokSalesQuotationArr.map((item) => (
              <Card
                key={item.SerialNo}
                title={item.customer.Name}
                hoverable
                style={{ marginTop: "1.5em", borderRadius: ".5em" }}
              >
                <h3></h3>
                {item.confirmed ? (
                  <Tag color="green" icon={<CheckCircleOutlined />}>
                    {" "}
                    تمت الموافقة
                  </Tag>
                ) : (
                  <Tag color="" icon={<SyncOutlined spin />}>
                    {" "}
                    قيد المراجعة
                  </Tag>
                )}
              </Card>
            ))}
          </TabPane>
        </Tabs>
      </div>
      <POButton />
    </>
  );
}
