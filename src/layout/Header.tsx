import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/alaqeel-logo.png";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [refresh, serRefresh] = useState(0);
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(false);
    setTimeout(() => {
      setInProp(true);
    }, 150);
  }, [refresh]);
  return (
    <>
      <div
        style={{}}
        onClick={() => {
          serRefresh(1 + refresh);
        }}
      >
        <Link to="/">
          {/**
        <h1 className="header-title">مصنع العقيل للاثاث</h1>
         */}
          <CSSTransition in={inProp} timeout={700} classNames="logo">
            <img src={logo} alt="" />
          </CSSTransition>
        </Link>
      </div>
    </>
  );
}
