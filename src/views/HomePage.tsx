import {
  DollarCircleOutlined,
  FieldTimeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SelectCustomer from "../components/customers/SelectCustomer";

export default function HomePage() {
  return (
    <>
      <SelectCustomer />

      <div style={{ marginTop: "2em" }}>
        <Row gutter={[16, 16]}>
          <Col xs={6}>
            <Link to="price-offers">
              <Card className="full-width centered home-card" hoverable={true}>
                <DollarCircleOutlined
                  style={{ color: "#6c6464", fontSize: "3em" }}
                />
                <h3 style={{ marginTop: ".75em" }}> عروض الاسعار</h3>
              </Card>
            </Link>
          </Col>
          <Col xs={6}>
            <Link to="sales-orders">
              <Card className="full-width centered home-card" hoverable={true}>
                <ShoppingOutlined
                  style={{ color: "#6c6464", fontSize: "3em" }}
                />
                <h3 style={{ marginTop: ".75em" }}>اوامر البيع</h3>
              </Card>
            </Link>
          </Col>
          <Col xs={6}>
            <Link to="track-time">
              <Card className="full-width centered home-card" hoverable={true}>
                <FieldTimeOutlined
                  style={{ color: "#6c6464", fontSize: "3em" }}
                />
                <h3 style={{ marginTop: ".75em" }}> التسليم والتركيب</h3>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
      {/**
      <ProductsCarousel />
      <ProductsList onRefreshMe={() => {}} refresh={0} />

      <SOButton /> */}
    </>
  );
}
