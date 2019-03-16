// import modules
import React, { Component } from "react";
import classNames from "classnames/bind";
// import component
import SocialLinks from "containers/index/socialLinks";
import Hellojs from "containers/index/hellojs";
// import styles
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

class IndexPage extends Component {
  render() {
    return (
      <div className={cx("container")}>
        <Hellojs />
        <SocialLinks />
      </div>
    );
  }
}

export default IndexPage;
