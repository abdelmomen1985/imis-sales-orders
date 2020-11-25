import React from "react";
import { ReactComponent as SalesSVG } from "../assets/svgs/sales.svg";
import { ReactComponent as CustomersSVG } from "../assets/svgs/customers.svg";
import { ReactComponent as DrawSVG } from "../assets/svgs/draw.svg";
import Icon from "@ant-design/icons";

export const SalesIcon = (props: any) => (
  <Icon component={SalesSVG} {...props} />
);

export const CustomersIcon = (props: any) => (
  <Icon component={CustomersSVG} {...props} />
);

export const DrawIcon = (props: any) => <Icon component={DrawSVG} {...props} />;
