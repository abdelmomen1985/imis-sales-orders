import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import config from "../../Configs";
import { Get } from "../../query/helpers";
import { ProductType } from "../../types";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  refresh: number;
  onRefreshMe: () => void;
  // onSelect: (product: ProductType) => void;
}

export default function ProductsList(props: ProductsListProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let data = await Get(config.API_URL + "imis/items", {});
      console.log("%c Mo2Log data", "background: #bada55", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      {products.length > 0 && (
        <>
          <h2>أمر بيع جديد</h2>
          <Row gutter={[16, 16]}>
            {products.map((product: ProductType) => (
              <Col md={6} xs={24} key={product.GUID}>
                <ProductCard onRefreshMe={() => {}} product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}
