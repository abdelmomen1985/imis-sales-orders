import {
  CreditCardOutlined,
  CustomerServiceOutlined,
  DollarCircleOutlined,
  FieldTimeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import { SalesChart } from "../charts/SalesChart";

const styles = {
  idicNumbersStyle: {
    textAlign: "center",
    direction: "ltr",
    marginTop: ".5em",
  } as React.CSSProperties,
};

export default function HomePage() {
  return (
    <>
      {/**
      <SelectCustomer />
      */}
      <Row>
        <Col span={18}>
          <div style={{ margin: "0 15px" }}>
            <Title level={4} style={{ textDecoration: "underline red" }}>
              {" "}
              نظرة عامة
            </Title>
            <div style={{ marginTop: "2em" }}>
              <Row gutter={[16, 16]}>
                <Col xs={8}>
                  <Link to="sales-orders">
                    <Card
                      className="full-width centered home-card"
                      hoverable={true}
                    >
                      <Row>
                        <Col offset={2}>
                          <DollarCircleOutlined
                            style={{ color: "#6c6464", fontSize: "1.5em" }}
                          />
                        </Col>
                        <Col>
                          <Title style={{ fontSize: ".9em", color: "#414141" }}>
                            الارباح
                          </Title>
                        </Col>
                      </Row>
                      <div style={styles.idicNumbersStyle}>
                        <Title style={{ fontSize: "1em", color: "teal" }}>
                          {" "}
                          920.150{" "}
                          <sub style={{ color: "green", margin: "0 5px" }}>
                            + 121011
                          </sub>
                        </Title>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col xs={8}>
                  <Link to="sales-orders">
                    <Card
                      className="full-width centered home-card"
                      hoverable={true}
                    >
                      <Row>
                        <Col offset={2}>
                          <CreditCardOutlined
                            style={{ color: "#6c6464", fontSize: "1.5em" }}
                          />
                        </Col>
                        <Col>
                          <Title style={{ fontSize: ".9em", color: "#414141" }}>
                            المصروفات
                          </Title>
                        </Col>
                      </Row>
                      <div style={styles.idicNumbersStyle}>
                        <Title style={{ fontSize: "1em", color: "teal" }}>
                          {" "}
                          620.150{" "}
                          <sub style={{ color: "green", margin: "0 5px" }}>
                            + 21011
                          </sub>
                        </Title>
                      </div>
                    </Card>
                  </Link>
                </Col>

                <Col xs={8}>
                  <Link to="sales-orders">
                    <Card
                      className="full-width centered home-card"
                      hoverable={true}
                    >
                      <Row>
                        <Col offset={2}>
                          <CustomerServiceOutlined
                            style={{ color: "#6c6464", fontSize: "1.5em" }}
                          />
                        </Col>
                        <Col>
                          <Title style={{ fontSize: ".9em", color: "#414141" }}>
                            العملاء الجدد
                          </Title>
                        </Col>
                      </Row>
                      <div style={styles.idicNumbersStyle}>
                        <Title style={{ fontSize: "1em", color: "teal" }}>
                          {" "}
                          115{" "}
                          <sub style={{ color: "red", margin: "0 5px" }}>
                            - 21
                          </sub>
                        </Title>
                      </div>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <Title level={4}>تقرير المبيعات</Title>
            <SalesChart />
          </div>
          <div style={{ marginTop: "2em" }}>
            <Row gutter={[16, 16]}>
              <Col xs={6}>
                <Link to="price-offers">
                  <Card
                    className="full-width centered home-card"
                    hoverable={true}
                  >
                    <DollarCircleOutlined
                      style={{ color: "#6c6464", fontSize: "3em" }}
                    />
                    <h3 style={{ marginTop: ".75em" }}> عروض الاسعار</h3>
                  </Card>
                </Link>
              </Col>
              <Col xs={6}>
                <Link to="sales-orders">
                  <Card
                    className="full-width centered home-card"
                    hoverable={true}
                  >
                    <ShoppingOutlined
                      style={{ color: "#6c6464", fontSize: "3em" }}
                    />
                    <h3 style={{ marginTop: ".75em" }}>اوامر البيع</h3>
                  </Card>
                </Link>
              </Col>
              <Col xs={6}>
                <Link to="track-time">
                  <Card
                    className="full-width centered home-card"
                    hoverable={true}
                  >
                    <FieldTimeOutlined
                      style={{ color: "#6c6464", fontSize: "3em" }}
                    />
                    <h3 style={{ marginTop: ".75em" }}> التسليم والتركيب</h3>
                  </Card>
                </Link>
              </Col>
            </Row>
          </div>
          {/*
      <ProductsCarousel />
      <ProductsList onRefreshMe={() => {}} refresh={0} />
      <SOButton /> 
      */}
        </Col>
        <Col span={6}>
          <div style={{ margin: "30px 5px" }}>
            <Title level={5}>أكثر المنتجات مبيعاً</Title>
            <div>
              <Card>
                <div className="simple-grid">
                  <div>
                    <img
                      src="https://i.imgur.com/zMCTznjs.jpg"
                      alt=""
                      style={{ maxWidth: "90%" }}
                    />
                  </div>
                  <div>
                    <div>صنف 3</div>
                    <Title style={{ fontSize: "1em", color: "teal" }}>
                      760 $
                    </Title>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="simple-grid">
                  <img
                    src="https://i.imgur.com/fOc97Vds.jpg"
                    alt=""
                    style={{ maxWidth: "90%" }}
                  />
                  <div>
                    <div>صنف 1</div>
                    <Title style={{ fontSize: "1em", color: "teal" }}>
                      360 $
                    </Title>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="simple-grid">
                  <img
                    src="https://i.imgur.com/W9Q2XxDs.png"
                    alt=""
                    style={{ maxWidth: "90%" }}
                  />
                  <div>
                    <div>صنف 7</div>
                    <Title style={{ fontSize: "1em", color: "teal" }}>
                      160 $
                    </Title>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
