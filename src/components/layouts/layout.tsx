// import global scss
import "normalize.css";
import "scss/common.scss";
import "eva-icons/style/scss/eva-icons.scss";
// import modules
import React, { ReactNode } from "react";
import Helmet from "react-helmet";
import classNames from "classnames/bind";
// import components
import Header from "./header";
// import layout module scss
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

interface LayoutProps {
  children?: ReactNode;
}

export default ({ children }: LayoutProps) => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Jusung Hwang (nabigraphics)</title>
      <link href="css/normalize.css" rel="stylesheet" type="text/css" />
    </Helmet>
    <Header />
    <div className={cx("layoutWrapper")}>{children}</div>
  </>
);
