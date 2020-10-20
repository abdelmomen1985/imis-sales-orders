import React from "react";
import { Button, Layout } from "antd";
import ProductsList from "./components/products/ProductsList";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./views/ProductPage";
import HomePage from "./views/HomePage";
import CartPage from "./views/CartPage";

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout.Content className="layout-content">
            <Switch>
              <Route path="/" exact component={HomePage} />

              <Route path="/product/:guid" component={ProductPage} />
              <Route path="/cart" component={CartPage} />
            </Switch>
          </Layout.Content>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Router>
    </>
  );
}
