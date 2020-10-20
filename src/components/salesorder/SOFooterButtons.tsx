import { SendOutlined } from "@ant-design/icons";
import { Button, Card, message, Popconfirm } from "antd";
import React from "react";

export default function SOFooterButtons({
  onSubmit,
  onDelete,
}: {
  onSubmit: () => void;
  onDelete: () => void;
}) {
  const confirm = () => {
    message.success("تم مسح امر البيع");
    onDelete();
  };

  return (
    <>
      <div className="centered">
        <Card>
          <Button
            icon={<SendOutlined />}
            type="primary"
            size="large"
            className="so-button"
            onClick={onSubmit}
          >
            <b style={{ fontSize: "1.1em", color: "white" }}>
              {" "}
              ارسال امر البيع{" "}
            </b>
          </Button>{" "}
          <Popconfirm
            title="هل انت متأكد من مسح العنصر ؟"
            onConfirm={confirm}
            okText="نعم, مسح"
            cancelText="لا, تراجع"
          >
            <Button type="ghost" danger onClick={() => {}} size="large">
              <b>مسـح امر البيع</b>
            </Button>
          </Popconfirm>
        </Card>
      </div>
    </>
  );
}
