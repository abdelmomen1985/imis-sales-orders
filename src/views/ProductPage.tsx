import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  notification,
  Row,
} from "antd";

import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ProductElementEntry from "../components/products/ProductElementEntry";
import config from "../Configs";
import { AppContext } from "../context/AppContextProvider";
import { getStorageSingleItem } from "../context/AppReducer";
import { Get } from "../query/helpers";
import {
  CustomerType,
  PriceOfferDetailType,
  PriceOfferType,
  ProductSpecElementType,
  ProductType,
  SalesOrderDetailType,
  SalesOrderType,
} from "../types";

interface ProductPageProps extends RouteComponentProps {}

const AnotherItem = () => {
  return (
    <div>
      <Form.Item rules={[{ required: true }]} name="sex">
        <Input />
      </Form.Item>
    </div>
  );
};

export default function ProductPage({ match, history }: ProductPageProps) {
  const { salesOrder, setSalesOrder, priceOffer, setPriceOffer } = useContext(
    AppContext
  );
  const { guid, sosq } = match.params as any;
  let sosqAr = sosq === "so" ? "امر البيع" : "عرض الاسعار";
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const [soElements, setSoElements] = useState({} as object);
  const [itemSpecs, setItemSpecs] = useState<ProductSpecElementType[]>([]);
  const [form] = Form.useForm();

  const openNotification = () => {
    notification.open({
      message: "تم الاضافة الي " + sosqAr,
      description: "تم اضافة العناصر المحددة الي " + sosqAr,
      onClick: () => {
        //console.log("Notification Clicked!");
      },
      duration: 2,
      onClose: () => {
        history.replace(
          "/" + (sosq === "so" ? "sales-orders" : "price-offers")
        );
      },
    });
  };

  useEffect(() => {
    const fetchItemSpecs = async () => {
      let data = await Get(config.API_URL + "imis/item/specs", {
        params: { GUID: guid },
      });
      console.log("%c Mo2Log data", "background: #bada55", data);
      setItemSpecs(data.specs);
      setProduct(data.item);
    };
    fetchItemSpecs();
  }, []);

  const onEntryValueChange = (
    spec: ProductSpecElementType,
    value: string | number,
    valueLabel?: string
  ) => {
    // console.log("%c Mo2Log newValue ", "background: #bada55", spec, value);
    let newElementVal = {} as any;
    newElementVal[spec.GUID] = {
      ...spec,
      value,
      valueLabel,
    } as ProductSpecElementType;
    setSoElements({ ...soElements, ...newElementVal });
  };

  const submitForm = (values: any) => {
    console.log("%c Mo2Log submitForm ", "background: #bada55", values);
    let { count } = values;
    console.log("%c Mo2Log soElements ", "background: #bada55", soElements);
    let storageCustomer = getStorageSingleItem(
      "CONTEXT_CUSTOMER"
    ) as CustomerType;
    if (sosq === "so") {
      let newSalesOrder = {
        ...salesOrder,
        customer: storageCustomer,
      } as SalesOrderType;
      let detail = {
        count,
        product: product!,
        specElements: [],
      } as SalesOrderDetailType;
      Object.keys(soElements).forEach((id, _) =>
        detail.specElements.push(
          (soElements as any)[id] as ProductSpecElementType
        )
      );
      // init details value
      newSalesOrder.details = salesOrder?.details?.length
        ? salesOrder.details
        : [];
      newSalesOrder.details.push(detail);
      setSalesOrder(newSalesOrder);
    } else if (sosq === "sq") {
      let newPriceOffer = {
        ...priceOffer,
        customer: storageCustomer,
      } as PriceOfferType;
      let detail = {
        count,
        product: product!,
        specElements: [],
      } as PriceOfferDetailType;
      Object.keys(soElements).forEach((id, _) =>
        detail.specElements.push(
          (soElements as any)[id] as ProductSpecElementType
        )
      );
      // init details value
      newPriceOffer.details = priceOffer?.details?.length
        ? priceOffer.details
        : [];
      newPriceOffer.details.push(detail);
      setPriceOffer(newPriceOffer);
    }
    openNotification();
  };

  return (
    <>
      <Row>
        <Col md={0}>
          <img src={product?.Img} />
        </Col>
        <Col md={18}>
          <h2>مواصفات {product?.ArabicDescription}</h2>
          {guid}
        </Col>
      </Row>

      <Card>
        <Form onFinish={submitForm} form={form}>
          <div className="ppage-form-item">
            <h3>العدد</h3>
            <Form.Item
              name={"count"}
              rules={[{ required: true, min: 1, type: "number" }]}
            >
              <InputNumber />
            </Form.Item>
          </div>
          <AnotherItem />

          {itemSpecs?.map((spec) => (
            <ProductElementEntry
              onChangeValue={(newValue, valueLabel) => {
                onEntryValueChange(spec, newValue, valueLabel);
              }}
              spec={spec}
              key={spec.GUID}
            />
          ))}
          <div className="centered">
            <Button type="primary" size="large" htmlType="submit">
              اضافة
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
