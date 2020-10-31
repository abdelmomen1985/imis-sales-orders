import {
  DeleteColumnOutlined,
  DeleteOutlined,
  SendOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, Card, message, Popconfirm } from "antd";
import React, { useState } from "react";

export default function SoSqFooterButtons({
  onSubmit,
  onDelete,
  sosq,
}: {
  onSubmit: () => void;
  onDelete: () => void;
  sosq: "so" | "sq";
}) {
  const sosqText = sosq === "so" ? "امر البيع" : "عرض الاسعار";
  const [sending, setSending] = useState(false);
  const confirm = () => {
    message.success("تم مسح " + sosqText);
    onDelete();
  };

  return (
    <>
      <div className="centered">
        <Card>
          <Button
            icon={
              sending ? <SyncOutlined color="blue" spin /> : <SendOutlined />
            }
            type="primary"
            size="large"
            className="so-button"
            onClick={() => {
              setSending(true);
              onSubmit();
            }}
            disabled={sending}
          >
            <b style={{ fontSize: "1.1em", color: "white" }}>
              {" "}
              ارسال {sosqText}{" "}
            </b>
          </Button>{" "}
          <span style={{ width: "2em", display: "inline-block" }}> </span>
          <Popconfirm
            title="هل انت متأكد من مسح العنصر ؟"
            onConfirm={confirm}
            okText="نعم, مسح"
            cancelText="لا, تراجع"
          >
            <Button
              icon={<DeleteOutlined />}
              type="ghost"
              danger
              onClick={() => {}}
              size="large"
            >
              <b>مسـح {sosqText}</b>
            </Button>
          </Popconfirm>
        </Card>
      </div>
    </>
  );
}
