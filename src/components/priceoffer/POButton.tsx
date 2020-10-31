import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";
import { PriceOfferType } from "../../types";

const countQny = (priceOffer: PriceOfferType) => {
  let count = 0;
  priceOffer?.details?.forEach((element) => {
    count += element.count;
  });
  return count;
};
export default function POButton() {
  const { priceOffer } = useContext(AppContext);
  let count = countQny(priceOffer);
  return (
    <>
      <div
        style={{
          display: "inline-block",
          position: "sticky",
          bottom: "1em",
          right: "100%",
          marginLeft: "1em",
        }}
      >
        <Button
          icon={<ShoppingCartOutlined />}
          type="primary"
          size="large"
          className="so-button"
          disabled={!(priceOffer?.details?.length > 0)}
        >
          <Link to="/po-cart">
            <b
              style={{
                fontSize: "1.1em",
                color: priceOffer?.details?.length > 0 ? "white" : "#332211",
              }}
            >
              عرض الاسعار ({count})
            </b>
          </Link>
        </Button>
      </div>
    </>
  );
}
