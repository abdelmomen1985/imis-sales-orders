import { Button, Carousel, Row } from "antd";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../Configs";
import { Get } from "../../query/helpers";
import { ProductType } from "../../types";
import ProductCard from "./ProductCard";

const contentStyle = {
  height: "360px",
  width: "480px",

  textAlign: "center",
} as CSSProperties;

export default function ProductsCarousel() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentProductGUID, setCurrentProductGUID] = useState("");
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let data = await Get(config.API_URL + "imis/items", {});
      console.log("%c Mo2Log data", "background: #bada55", data);
      setProducts(data);
      setCurrentProductGUID(data[0].GUID);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        <div
          style={{
            width: "380px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel
            ref={carouselRef}
            autoplay
            afterChange={(slide) => {
              console.log(slide);
              let currentKey;
              if (
                carouselRef.current?.innerSlider &&
                carouselRef.current.innerSlider.props?.children
              ) {
                currentKey = (carouselRef.current?.innerSlider?.props
                  ?.children as any[])[slide]["key"];
              } else {
                if (carouselRef.current?.props?.children)
                  currentKey = (carouselRef.current?.props?.children as any[])[
                    slide
                  ]["key"];
              }

              setCurrentProductGUID(currentKey);
            }}
            dotPosition="top"
            dots={{ className: "custom-dots" }}
          >
            {products &&
              products.map((product: ProductType) => (
                <div key={product.GUID} style={contentStyle}>
                  <ProductCard
                    onRefreshMe={() => {}}
                    product={product}
                    hideButton={true}
                  />
                </div>
              ))}
          </Carousel>
          <div style={{ textAlign: "center" }}>
            <Button
              type="primary"
              onClick={() => {
                carouselRef.current?.next();
              }}
            >
              السابق
            </Button>{" "}
            <Button
              type="primary"
              onClick={() => {
                carouselRef.current?.prev();
              }}
            >
              التالي
            </Button>
            <div style={{ marginTop: "1em" }}>
              <Link
                to={
                  currentProductGUID ? `/product/${currentProductGUID}/sq` : ""
                }
              >
                <Button type="primary" style={{ backgroundColor: "teal" }}>
                  اضافة العنصر
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <br />
          </div>
        </div>
      </Row>
    </>
  );
}
