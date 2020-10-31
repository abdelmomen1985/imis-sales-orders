import { Button, Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import config from "../../Configs";
import { AppContext } from "../../context/AppContextProvider";
import { Post } from "../../query/helpers";
import { CustomerType } from "../../types";

type AddCustomerModalProps = {
  visible: boolean;
  closeMe: () => void;
  onSave: () => void;
};
export default function AddCustomerModal(props: AddCustomerModalProps) {
  let { visible, closeMe, onSave } = props;
  const { setContextCustomer } = useContext(AppContext);
  const handleSave = async (values: any) => {
    let [row] = await Post(
      config.API_URL + "imis/customer",
      {
        name: values.name,
      },
      {}
    );
    console.log("%c Mo2Log  row.GUID", "background: #bada55", row.GUID);
    setContextCustomer({
      GUID: row.GUID,
      Name: values.name,
    } as CustomerType);
    onSave();
  };
  const hadleClose = () => {
    closeMe();
  };
  return (
    <Modal
      title=""
      visible={visible}
      onOk={handleSave}
      onCancel={hadleClose}
      okButtonProps={{ hidden: true }}
      cancelText="الغاء"
    >
      <div style={{ marginTop: "2em" }}>
        <Form onFinish={handleSave}>
          <Form.Item
            label="اسم العميل"
            name="name"
            rules={[{ required: true, message: "برجاء ادخال اسم العميل" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              اضافة
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
