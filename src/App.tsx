import { Avatar, Layout, Button, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
} from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import { CSSTransition } from "react-transition-group";
import logo from "./assets/images/alaqeel-logo.png";
import logoCircle from "./assets/images/circle-logo.png";
import { AppContext } from "./context/AppContextProvider";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import CartPage from "./views/CartPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import PriceOfferCartPage from "./views/PriceOfferCartPage";
import PriceOffers from "./views/PriceOffers";
import ProductPage from "./views/ProductPage";
import SalesOrdersPage from "./views/SalesOrdersPage";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeFilled,
  TableOutlined,
  FileDoneOutlined,
  ClockCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { SalesIcon, CustomersIcon, DrawIcon } from "./components/icons";
import CustomersPage from "./views/CustomersPage";

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

const styles = {
  menuItemStyle: {
    textAlign: "right",
    fontFamily: "Cairo",
    fontSize: "1.1em",
  } as React.CSSProperties,
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
                <Menu defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item
                    key="1"
                    icon={
                      <HomeFilled
                        className="menu-icon"
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    style={styles.menuItemStyle}
                  >
                    <Link to="/">الرئيسية</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={
                      <CustomersIcon
                        className="menu-icon"
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    style={styles.menuItemStyle}
                  >
                    <Link to="/customers">أدارة العملاء</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    icon={
                      <SalesIcon
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    style={styles.menuItemStyle}
                  >
                    <Link to="price-offers">أدارة المبيعات</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    icon={
                      <DrawIcon
                        className="menu-icon"
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    style={styles.menuItemStyle}
                  >
                    اضافة رسم
                  </Menu.Item>

                  <Menu.Item
                    key="5"
                    icon={
                      <TableOutlined
                        className="menu-icon"
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    style={styles.menuItemStyle}
                  >
                    جدول الطلبات
                  </Menu.Item>

                  <Menu.Item
                    key="6"
                    icon={
                      <FileDoneOutlined
                        className="menu-icon"
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    style={styles.menuItemStyle}
                  >
                    تعليمات
                  </Menu.Item>

                  <Menu.Item
                    key="7"
                    icon={
                      <ClockCircleOutlined
                        className="menu-icon"
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    style={styles.menuItemStyle}
                  >
                    تتبع الوقت
                  </Menu.Item>

                  <Menu.Item
                    key="8"
                    icon={
                      <LogoutOutlined
                        className="menu-icon"
                        style={{ margin: !collapsed ? "0 10px" : "" }}
                      />
                    }
                    onClick={() => {
                      setLoggedInUser(null);
                    }}
                    style={styles.menuItemStyle}
                  >
                    تسجيل الخروج
                  </Menu.Item>
                </Menu>
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
                <Route path="/login" component={LoginPage} />
                <Route path="/customers" component={CustomersPage} />
              </AnimatedSwitch>
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
