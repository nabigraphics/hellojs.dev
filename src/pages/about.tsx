// import modules
import React, { Component } from "react";
import classNames from "classnames/bind";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
// import styles
import styles from "./about.module.scss";
const cx = classNames.bind(styles);

class AboutPage extends Component {
  render() {
    return (
      <div className={cx("container")}>
        <Parallax pages={8} style={{ width: "100%", height: "100vh" }}>
          <ParallaxLayer offset={0.45} speed={1}>
            <h1>👋 HI! This page is About!</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.75} speed={0.5}>
            <span>(scroll...? 🤔)</span>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={1} style={{ color: "red" }}>
            <h1>Oops... sorry</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.55} speed={0.8}>
            <h2>It was coming sooooooooooooooooooooooon!!!</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={7.45} speed={1}>
            <h1>Oh, you found Last Layer!</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default AboutPage;
