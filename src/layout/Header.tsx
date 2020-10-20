import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">
        <h1 className="header-title">مصنع العقيل للاثاث</h1>
      </Link>
    </>
  );
}
