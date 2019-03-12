// import modules
import React, { Component } from "react";
import classNames from "classnames/bind";
// import component
import SocialLinks from "containers/index/socialLinks";
// import styles
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

class IndexPage extends Component {
  render() {
    return (
      <div className={cx("container")}>
        <h1 className={cx("hellojs")}>hello, JS</h1>
        <SocialLinks />
      </div>
    );
  }
}

export default IndexPage;
