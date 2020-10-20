import { Card, Form, Select } from "antd";

import React, { useContext, useEffect, useState } from "react";
import config from "../../Configs";
import { AppContext } from "../../context/AppContextProvider";
import { Get } from "../../query/helpers";
import { CustomerType } from "../../types";

export default function SelectCustomer() {
  const [customersList, setCustomersList] = useState<CustomerType[]>([]);
  const { customerGUID, setContextCustomer } = useContext(AppContext);

  const selectCustomer = (selectedCustGUID: string) => {
    console.log(
      "%c Mo2Log newCustomer ",
      "background: #bada55",
      selectedCustGUID,
      customersList
    );

    let customer = customersList.find(
      (customer) => customer.GUID === selectedCustGUID
    );
    console.log("%c Mo2Log customers ", "background: #bada55", customer!);
    setContextCustomer(customer!);
  };
  useEffect(() => {
    const fetchCustomers = async () => {
      let data = await Get(config.API_URL + "imis/customers", {});
      console.log("%c Mo2Log data", "background: #bada55", data);

      setCustomersList(data);
    };
    fetchCustomers();
  }, []);
  return (
    <>
      <Card style={{ marginBottom: "1em" }}>
        <h3>اسم العميل</h3>
        <Form.Item>
          <Select onChange={selectCustomer} defaultValue={customerGUID}>
            {customersList.map((customer) => (
              <Select.Option key={customer.GUID} value={customer.GUID}>
                {customer.Name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Card>
    </>
  );
}
