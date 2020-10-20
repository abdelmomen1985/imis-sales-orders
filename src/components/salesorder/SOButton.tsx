import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";

export default function SOButton() {
  const { salesOrder } = useContext(AppContext);
  return (
    <>
      <div className="centered">
        <Card>
          <Button
            icon={<ShoppingCartOutlined />}
            type="primary"
            size="large"
            className="so-button"
            disabled={!(salesOrder?.details?.length > 0)}
          >
            <Link to="/cart">
              <b style={{ fontSize: "1.1em", color: "white" }}>عرض امر البيع</b>
            </Link>
          </Button>
        </Card>
      </div>
    </>
  );
}
