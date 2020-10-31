import { Card, Form, Input, InputNumber, Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import config from "../../Configs";
import { Get } from "../../query/helpers";
import { ProductSpecDetailType, ProductSpecElementType } from "../../types";

type ProductElementEntryProps = {
  spec: ProductSpecElementType;
  onChangeValue: (value: string | number, label?: string) => void;
};
export default function ProductElementEntry({
  spec,
  onChangeValue,
}: ProductElementEntryProps) {
  const [specDetails, setSpecDetails] = useState<ProductSpecDetailType[]>([]);
  useEffect(() => {
    const fetchSpecDetails = async () => {
      let data = await Get(config.API_URL + "imis/item/spec/list", {
        params: { HeadId: spec.GUID },
      });
      console.log("%c Mo2Log fetchSpecDetails", "background: #bada55", data);
      setSpecDetails(data);
    };
    if (+spec.InputType === 3) fetchSpecDetails();
  }, [spec]);

  const onChangeElement = (newValue: string | number | undefined) => {
    onChangeValue(newValue!);
  };

  const onSelectOption = (optGUID: string) => {
    // get label
    let specDet = specDetails.find((specDet) => specDet.GUID === optGUID);
    onChangeValue(optGUID, specDet?.ArabicDescription);
  };
  //           rules={[{ required: +spec.InputType === 1 , type: +spec.InputType === 1 ? "number": undefined}]}
  return (
    <>
      <div className="ppage-form-item">
        <h3 style={{ display: "inline-block" }}>{spec.ArabicDescription}</h3>{" "}
        {spec.UnitId === "01001-AD06DE17-6E8E-4B82-9F0F-401ED621A888" && (
          <span> (سـم) </span>
        )}
        <Form.Item name={spec.GUID}>
          {+spec.InputType === 1 && (
            <Input
              onChange={(e) => {
                onChangeValue(e.target.value);
              }}
            />
          )}
          {+spec.InputType === 2 && (
            <Tooltip
              trigger={["focus"]}
              title={`الحد الادني ${+spec.MinValue} , الحد الاعلي ${+spec.MaxValue}`}
              placement="topRight"
            >
              <InputNumber onChange={onChangeElement} />
            </Tooltip>
          )}
          {+spec.InputType === 3 && (
            <Select onChange={onSelectOption}>
              {specDetails.map((detail) => (
                <Select.Option key={detail.GUID} value={detail.GUID}>
                  {detail.ArabicDescription}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
      </div>
    </>
  );
}
