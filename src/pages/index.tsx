// import modules
import React, { Component } from "react";
import classNames from "classnames/bind";
import { navigate } from "gatsby";
// import component
import Hellojs from "containers/index/hellojs";
import Button from "components/button";
import Mochi from "containers/index/mochi";
// import styles
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

class IndexPage extends Component {
  render() {
    return (
      <div className={cx("topSection")}>
        <div className={cx("left")}>
          {/* Hello JS Text Loop */}
          <Hellojs />
          {/* About Me Button */}
          <Button
            onClick={() => navigate("/about")}
            theme="secondary"
            rounded={true}
            className={cx("aboutMe")}
          >
            About Me <i className="eva eva-chevron-right-outline" />
          </Button>
        </div>
        <div className={cx("right")}>
          <Mochi />
          <p className={cx("dragText")}>
            <i className="eva eva-arrowhead-up-outline" aria-disabled />
            (Drag Me 🙂)
          </p>
        </div>
      </div>
    );
  }
}

export default IndexPage;
