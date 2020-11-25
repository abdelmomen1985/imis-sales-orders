import { Button, Card, Checkbox, Form, Input, Row, Col } from "antd";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import Title from "antd/lib/typography/Title";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function LoginPage(props: RouteComponentProps) {
  let { history } = props;
  const { setLoggedInUser, setShowSider } = useContext(AppContext);

  const onFinish = (values: any) => {
    if (values.username === values.password) {
      setLoggedInUser(true);
      setShowSider(true);
      history.push("/home");
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <Card
        style={{
          margin: "30px 190px",
          borderRadius: "5px",
          border: "1px solid #0000003D",
        }}
      >
        <Title level={3} style={{ color: "#414141", marginRight: "40px" }}>
          تسجيل الدخول
        </Title>
        <div style={{ marginRight: "40px", marginLeft: "40px" }}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "برجاء ادخال اسم المستخدم" }]}
            >
              <Input
                prefix={
                  <span
                    style={{
                      margin: "5px",
                    }}
                  >
                    <UserOutlined
                      style={{
                        backgroundColor: "#904f4f",
                        color: "white",
                        padding: "5px",
                        borderRadius: "3px",
                      }}
                    />
                  </span>
                }
                placeholder="اسم المستخدم"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "برجاء ادخال كلمة المرور" }]}
            >
              <Input.Password
                prefix={
                  <span
                    style={{
                      margin: "5px",
                    }}
                  >
                    <LockOutlined
                      style={{
                        backgroundColor: "#904f4f",
                        color: "white",
                        padding: "5px",
                        borderRadius: "3px",
                      }}
                    />
                  </span>
                }
                placeholder="كلمة المرور"
              />
            </Form.Item>
            <Row dir="rtl">
              <Col span={12}>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>تذكرني</Checkbox>
                </Form.Item>
              </Col>
              <Col span={12} style={{ textAlign: "left" }}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ fontWeight: "bold" }}
                  >
                    دخول
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Card>
    </>
  );
}
