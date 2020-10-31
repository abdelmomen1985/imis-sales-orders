import { Button, Card, Checkbox, Form, Input } from "antd";
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function LoginPage(props: RouteComponentProps) {
  let { history } = props;
  const { setLoggedInUser } = useContext(AppContext);

  const onFinish = (values: any) => {
    if (values.username === values.password) {
      setLoggedInUser(true);
      history.push("/home");
    }
  };

  return (
    <>
      <Card>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="اسم المستخدم"
            name="username"
            rules={[{ required: true, message: "برجاء ادخال اسم المستخدم" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="كلمة المرور"
            name="password"
            rules={[{ required: true, message: "برجاء ادخال كلمة المرور" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>تذكرني</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              دخول
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}
