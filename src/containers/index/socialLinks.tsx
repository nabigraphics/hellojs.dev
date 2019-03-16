import React, { Component } from "react";
import classNames from "classnames/bind";
import Button from "components/button/index";
import styles from "./socialLinks.module.scss";

const cx = classNames.bind(styles);

class SocialLinks extends Component {
  render() {
    return (
      <div className={cx("list")}>
        <Button
          href="https://github.com/nabigraphics"
          target="_blank"
          className={cx("item")}
        >
          <i className={cx("eva eva-github", "icon")} aria-disabled />
        </Button>
        <Button
          href="https://twitter.com/nabigraphics"
          target="_blank"
          className={cx("item")}
        >
          <i className={cx("eva eva-twitter", "icon")} aria-disabled />
        </Button>
        <Button
          href="https://www.linkedin.com/in/nabigraphics/"
          target="_blank"
          className={cx("item")}
        >
          <i className={cx("eva eva-linkedin", "icon")} aria-disabled />
        </Button>
      </div>
    );
  }
}

export default SocialLinks;
