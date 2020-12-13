import { Button, Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import config from "../../Configs";
import { AppContext } from "../../context/AppContextProvider";

type InstructionsModalProps = {
  visible: boolean;
  closeMe: () => void;
  onSave: () => void;
};
export default function InstructionsModal(props: InstructionsModalProps) {
  let { visible, closeMe, onSave } = props;
  const { setContextCustomer } = useContext(AppContext);
  const handleSave = async (values: any) => {
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
      <div style={{ marginTop: "2em" }}>GOES HERE</div>
    </Modal>
  );
}
