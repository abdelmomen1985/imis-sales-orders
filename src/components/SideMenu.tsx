import {
  ClockCircleOutlined,
  FileDoneOutlined,
  HomeFilled,
  LogoutOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { CustomersIcon, DrawIcon, SalesIcon } from "./icons";

const styles = {
  menuItemStyle: {
    textAlign: "right",
    fontFamily: "Cairo",
    fontSize: "1.1em",
  } as React.CSSProperties,
};

export default function SideMenu({
  collapsed,
  onLogout,
}: {
  collapsed: boolean;
  onLogout: () => void;
}) {
  return (
    <>
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item
          key="1"
          icon={
            <HomeFilled
              className="menu-icon"
              style={{ margin: !collapsed ? "0 10px" : "" }}
            />
          }
          style={styles.menuItemStyle}
        >
          <Link to="/">الرئيسية</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <CustomersIcon
              className="menu-icon"
              style={{ margin: !collapsed ? "0 10px" : "" }}
            />
          }
          style={styles.menuItemStyle}
        >
          <Link to="/customers">أدارة العملاء</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<SalesIcon style={{ margin: !collapsed ? "0 10px" : "" }} />}
          style={styles.menuItemStyle}
        >
          <Link to="price-offers">أدارة المبيعات</Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <DrawIcon
              className="menu-icon"
              style={{ margin: !collapsed ? "0 10px" : "" }}
            />
          }
          style={styles.menuItemStyle}
        >
          اضافة رسم
        </Menu.Item>

        <Menu.Item
          key="5"
          icon={
            <TableOutlined
              className="menu-icon"
              style={{ margin: !collapsed ? "0 10px" : "" }}
            />
          }
          style={styles.menuItemStyle}
        >
          <Link to="/sales-orders-table">جدول الطلبات</Link>
        </Menu.Item>

        <Menu.Item
          key="6"
          icon={
            <FileDoneOutlined
              className="menu-icon"
              style={{ margin: !collapsed ? "0 10px" : "" }}
            />
          }
          style={styles.menuItemStyle}
        >
          <Link to="/instructions">تعليمات</Link>
        </Menu.Item>

        <Menu.Item
          key="7"
          icon={
            <ClockCircleOutlined
              className="menu-icon"
              style={{ margin: !collapsed ? "0 10px" : "" }}
            />
          }
          style={styles.menuItemStyle}
        >
          <Link to="/time-tracking">تتبع الوقت</Link>
        </Menu.Item>

        <Menu.Item
          key="8"
          icon={
            <LogoutOutlined
              className="menu-icon"
              style={{ margin: !collapsed ? "0 10px" : "" }}
            />
          }
          onClick={() => {
            onLogout();
          }}
          style={styles.menuItemStyle}
        >
          تسجيل الخروج
        </Menu.Item>
      </Menu>
    </>
  );
}
