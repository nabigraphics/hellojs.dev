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
          <span className={cx("text")}>github</span>
        </Button>
        <Button title="Comming Soon" disabled className={cx("item")}>
          blog
        </Button>
      </div>
    );
  }
}

export default SocialLinks;
