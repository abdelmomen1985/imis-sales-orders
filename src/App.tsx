import { Layout } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
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
  const { userLoggedIn } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(userLoggedIn);
  useEffect(() => {
    setIsLoggedIn(userLoggedIn);
    console.log("%c Mo2Log userLoggedIn ", "background: #bada55", userLoggedIn);
  }, [userLoggedIn]);
  return (
    <>
      <Router>
        <Layout>
          <Layout.Header
            style={{
              backgroundColor: "white",
              height: "120px",
              paddingTop: "10px",
            }}
          >
            <Header />
          </Layout.Header>
          <Layout.Content className="layout-content">
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="route-wrapper"
            >
              <Route path="/" exact>
                {isLoggedIn ? <Redirect to="home" /> : <Redirect to="login" />}
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
            </AnimatedSwitch>
          </Layout.Content>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Router>
    </>
  );
}
