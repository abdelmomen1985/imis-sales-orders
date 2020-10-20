import { Card, Button, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types";

interface ProjectCardProps {
  // onSelect: (product: ProductType) => void;
  onRefreshMe: () => void;
  product: ProductType;
}

export default function ProductCard({ product }: ProjectCardProps) {
  return (
    <>
      <Card>
        <h2 className="product-card-title">{product.ArabicDescription}</h2>
        <Row justify="center">
          <Button type="primary">
            <Link to={`/product/${product.GUID}`}>اضافة الي امر البيع</Link>
          </Button>
        </Row>
      </Card>
    </>
  );
}
