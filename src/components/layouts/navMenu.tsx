import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./navMenu.module.scss";

const cx = classNames.bind(styles);

class NavMenu extends Component {
  render() {
    return (
      <nav className={cx("nav")}>
        <ul className={cx("ul")}>
          <li>About</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
