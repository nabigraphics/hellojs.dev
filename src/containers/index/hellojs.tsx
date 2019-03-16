// import modules
import React, { Component } from "react";
import classNames from "classnames/bind";
import TextLoop from "components/textLoop";
// import styles
import styles from "./hellojs.module.scss";

const cx = classNames.bind(styles);

class Hellojs extends Component {
  render() {
    return (
      <div className={cx("container")}>
        <div className={cx("hellojs")}>
          <span className={cx("hello")}>👋 hello,</span>
          <TextLoop
            interval={3000}
            className={cx("loop")}
            queue={["JS", "Jusung", "Jason", "Javascript", "JSON"]}
          />
        </div>
      </div>
    );
  }
}

export default Hellojs;
