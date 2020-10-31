import { Card, Button, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types";

interface ProjectCardProps {
  // onSelect: (product: ProductType) => void;
  onRefreshMe: () => void;
  product: ProductType;
  hideButton?: boolean;
}

export default function ProductCard({ hideButton, product }: ProjectCardProps) {
  return (
    <>
      <Card>
        <img src={product.Img} alt="" style={{ width: "100%" }} />
        <h2 className="product-card-title">{product.ArabicDescription}</h2>
        {!hideButton && (
          <Row justify="center">
            <Button type="primary">
              <Link to={`/product/${product.GUID}/so`}>
                اضافة الي امر البيع
              </Link>
            </Button>
          </Row>
        )}
      </Card>
    </>
  );
}
