import React, { FunctionComponent, useState } from "react";
import { navigate } from "gatsby";
import classNames from "classnames/bind";
import NavMenu from "./navMenu";
import SocialLinks from "components/layouts/socialLinks";
import Button from "components/button";
// import styles
import styles from "./header.module.scss";

const cx = classNames.bind(styles);

const Header: FunctionComponent = () => {
  const [open, set] = useState(false);
  return (
    <div className={cx("header")}>
      <div className={cx("logo")} onClick={() => navigate("/")}>
        <img
          alt="nabigraphics Logo"
          className={cx("logoImage")}
          src="/images/logo.png"
        />
      </div>
      <Button
        rounded
        className={cx("menuOpenButton", { open })}
        onClick={() => set(!open)}
      >
        <i
          className={`eva ${open ? "eva-close-outline" : "eva-menu-outline"}`}
          aria-disabled
        />
      </Button>
      <div className={cx("menu", { open })}>
        <NavMenu open={open} />
        <SocialLinks open={open} />
      </div>
    </div>
  );
};

export default Header;

// class Header extends Component {
//   render() {
//     return (
//       <div className={cx("header")}>
//         <div className={cx("logo")}>
//           <img
//             alt="nabigraphics Logo"
//             className={cx("logoImage")}
//             src="/images/logo.png"
//           />
//         </div>
//         <Button className={cx("menuOpenButton")}>
//           <i className="eva eva-menu-outline" aria-disabled />
//         </Button>
//         <div className={cx("menu")}>
//           <NavMenu />
//           <SocialLinks />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Header;
