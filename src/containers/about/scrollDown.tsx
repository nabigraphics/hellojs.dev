import React, { FunctionComponent } from "react";
import classNames from "classnames/bind";

import styles from "./scrollDown.module.scss";

const cx = classNames.bind(styles);

const ScrollDown: FunctionComponent = () => (
  <>
    <span className={cx("text")}>Scroll</span>
    <i className={cx("eva eva-arrow-downward-outline", "icon")} aria-disabled />
  </>
);

export default ScrollDown;
