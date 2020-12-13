import { Button, Card, Form, Select } from "antd";
import React, { useContext, useEffect, useState } from "react";
import config from "../../Configs";
import { AppContext } from "../../context/AppContextProvider";
import { getCustomers } from "../../queries";
import { Get } from "../../query/helpers";
import { CustomerType } from "../../types";
import AddCustomerModal from "./AddCustomerModal";

export default function SelectCustomer() {
  const [customersList, setCustomersList] = useState<CustomerType[]>([]);
  const { contextCustomer, setContextCustomer } = useContext(AppContext);
  const [defaultCustomerGUID, setDefaultCustomerGUID] = useState(
    contextCustomer?.GUID
  );

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

  const fetchCustomers = async () => {
    const customers = await getCustomers();
    setCustomersList(customers);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    setDefaultCustomerGUID(contextCustomer?.GUID);
  }, [contextCustomer]);

  return (
    <>
      <Card style={{ marginBottom: "1em" }}>
        <h3>اسم العميل</h3>
        <Form.Item>
          <Select
            onChange={selectCustomer}
            key={defaultCustomerGUID}
            defaultValue={defaultCustomerGUID}
          >
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
