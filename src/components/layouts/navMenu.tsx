import React, { FunctionComponent } from "react";
import classNames from "classnames/bind";
import styles from "./navMenu.module.scss";

const cx = classNames.bind(styles);

interface NavMenuProps {
  open: boolean;
}

const NavMenu: FunctionComponent<NavMenuProps> = ({ open }) => {
  return (
    <nav className={cx("nav", { open })}>
      <ul className={cx("ul", { open })}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
