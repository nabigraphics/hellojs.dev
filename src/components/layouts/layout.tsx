// import global scss
import "scss/common.scss";
import "eva-icons/style/scss/eva-icons.scss";
// import modules
import React, { ReactNode } from "react";
import Helmet from "react-helmet";
import classNames from "classnames/bind";
// import layout module scss
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

interface LayoutProps {
  children?: ReactNode;
}

export default ({ children }: LayoutProps) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:300:600"
        rel="stylesheet"
      />
    </Helmet>
    <div className={cx("layoutWrapper")}>{children}</div>
  </>
);
