import React, { FunctionComponent } from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";
import styles from "./navMenu.module.scss";

const cx = classNames.bind(styles);

interface NavMenuProps {
  open: boolean;
}

const NavMenu: FunctionComponent<NavMenuProps> = ({ open }) => {
  const defaultLinkProps = {
    activeClassName: cx("active")
  };
  return (
    <nav className={cx("nav", { open })}>
      <div className={cx("list", { open })}>
        <Link to="about" {...defaultLinkProps}>
          About
        </Link>
        {/*<Link to="about" {...defaultLinkProps}>*/}
        {/*Portfolio*/}
        {/*</Link>*/}
        {/*<Link to="blog" {...defaultLinkProps}>*/}
        {/*Blog*/}
        {/*</Link>*/}
      </div>
    </nav>
  );
};

export default NavMenu;
