import {
  ClockCircleOutlined,
  FileDoneOutlined,
  HomeFilled,
  TableOutlined,
} from "@ant-design/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import { CustomersIcon, SalesIcon } from "./icons";

const headInfoObj = {
  "/home": {
    title: "الرئيسية",
    icon: <HomeFilled />,
  },
  "/customers": {
    title: "ادارة العملاء",
    icon: <CustomersIcon />,
  },
  "/price-offers": {
    title: "ادارة المبيعات",
    icon: <SalesIcon />,
  },
  "/sales-orders-table": {
    title: "جدول الطلبيات",
    icon: <TableOutlined />,
  },
  "/instructions": {
    title: "تعليمات",
    icon: <FileDoneOutlined />,
  },
  "/time-tracking": {
    title: "تتبع الوقت",
    icon: <ClockCircleOutlined />,
  },
} as any;
export default function PagesHeader() {
  const location = useLocation();

  return (
    <div>
      {headInfoObj[location.pathname]?.icon}
      <h1 style={{ display: "inline-block", marginRight: ".25em" }}>
        {headInfoObj[location.pathname]?.title}
      </h1>
    </div>
  );
}
