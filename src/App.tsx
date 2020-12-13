import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationFilled,
  SettingFilled,
} from "@ant-design/icons";
import { Avatar, Button, Col, Layout, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import { CSSTransition } from "react-transition-group";
import logo from "./assets/images/alaqeel-logo.png";
import logoCircle from "./assets/images/circle-logo.png";
import PagesHeader from "./components/PagesHeader";
import SideMenu from "./components/SideMenu";
import { AppContext } from "./context/AppContextProvider";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import CartPage from "./views/CartPage";
import CustomersPage from "./views/CustomersPage";
import HomePage from "./views/HomePage";
import InstructionsPage from "./views/InstructionsPage";
import LoginPage from "./views/LoginPage";
import PriceOfferCartPage from "./views/PriceOfferCartPage";
import PriceOffers from "./views/PriceOffers";
import ProductPage from "./views/ProductPage";
import SalesOrdersPage from "./views/SalesOrdersPage";
import SalesOrdersTable from "./views/SalesOrdersTable";
import TimeTrackingPage from "./views/TimeTrackingPage";

function mapStyles(styles: any) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val: number) {
  return spring(val, {
    stiffness: 300,
    damping: 30,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export default function App() {
  const { userLoggedIn, showSider, setLoggedInUser } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(userLoggedIn);
  const [collapsed, setCollapsed] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [inProp, setInProp] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setRefresh(1 + refresh);
  };

  useEffect(() => {
    setIsLoggedIn(userLoggedIn);
    console.log("%c Mo2Log userLoggedIn ", "background: #bada55", userLoggedIn);
  }, [userLoggedIn]);

  useEffect(() => {
    setInProp(false);
    setTimeout(() => {
      setInProp(true);
    }, 150);
  }, [refresh]);
  return (
    <>
      <Router>
        <Layout>
          {showSider && (
            <Layout.Sider
              collapsed={collapsed}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px 0px 0px 0px",
              }}
            >
              <div style={{ width: "100%" }}>
                <div
                  style={{ margin: "20px 15px" }}
                  onClick={() => setRefresh(1 + refresh)}
                >
                  <Link to="/">
                    <CSSTransition in={inProp} timeout={700} classNames="logo">
                      <img
                        src={collapsed ? logoCircle : logo}
                        alt=""
                        style={{
                          maxWidth: "100%",
                        }}
                      />
                    </CSSTransition>
                  </Link>
                </div>

                <Button
                  type="primary"
                  onClick={toggleCollapsed}
                  style={{ marginBottom: 16 }}
                >
                  {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                  )}
                </Button>
                <div style={{ textAlign: "center" }}>
                  <Avatar
                    size={collapsed ? 40 : 80}
                    src="https://i.imgur.com/W7WjRNt.png"
                  />
                  {!collapsed && (
                    <Title
                      style={{
                        fontSize: "1em",
                        color: "#414141",
                        marginTop: ".5em",
                      }}
                    >
                      محمد احمد عبدالعزيز
                    </Title>
                  )}
                </div>
                <SideMenu
                  onLogout={() => {
                    setLoggedInUser(null);
                  }}
                  collapsed={collapsed}
                />
              </div>
            </Layout.Sider>
          )}

          <Layout>
            {!showSider && (
              <Layout.Header
                style={{
                  backgroundColor: "white",
                  height: "120px",
                  paddingTop: "10px",
                }}
              >
                <Header />
              </Layout.Header>
            )}
            <Layout.Content className="layout-content">
              <Row style={{ margin: "1em 0" }}>
                <Col span={18}>
                  <PagesHeader />
                </Col>
                <Col span={6}>
                  <NotificationFilled
                    className="primary-icon"
                    style={{ fontSize: "1.4em", margin: ".25em" }}
                  />
                  <SettingFilled
                    className="primary-icon"
                    style={{ fontSize: "1.4em", margin: ".25em" }}
                  />
                </Col>
              </Row>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1em",
                  marginTop: ".5em",
                }}
              >
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="route-wrapper"
                >
                  <Route path="/" exact>
                    {isLoggedIn ? (
                      <Redirect to="home" />
                    ) : (
                      <Redirect to="login" />
                    )}
                  </Route>
                  <Route path="/home">
                    {isLoggedIn ? <HomePage /> : <Redirect to="login" />}
                  </Route>
                  <Route path="/product/:guid/:sosq" component={ProductPage} />
                  <Route path="/cart" component={CartPage} />
                  <Route path="/po-cart" component={PriceOfferCartPage} />
                  <Route path="/price-offers" component={PriceOffers} />
                  <Route path="/sales-orders" component={SalesOrdersPage} />
                  <Route
                    path="/sales-orders-table"
                    component={SalesOrdersTable}
                  />
                  <Route path="/instructions" component={InstructionsPage} />
                  <Route path="/time-tracking" component={TimeTrackingPage} />

                  <Route path="/login" component={LoginPage} />
                  <Route path="/customers" component={CustomersPage} />
                </AnimatedSwitch>
              </div>
            </Layout.Content>
            <Layout.Footer>
              <Footer />
            </Layout.Footer>
          </Layout>
        </Layout>
      </Router>
    </>
  );
}
