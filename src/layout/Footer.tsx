import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContextProvider";

export default function Footer() {
  const { customerGUID } = useContext(AppContext);

  return (
    <>
      <div className="centered"></div>
    </>
  );
}
