// import modules
import React, { FunctionComponent } from "react";
import classNames from "classnames/bind";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
// import components
import Intro from "containers/about/intro";
import ScrollDown from "containers/about/scrollDown";
// import MDX
import Resume from "containers/about/resume.mdx";
// imoprt styles
import styles from "./about.module.scss";

const cx = classNames.bind(styles);

const AboutPage: FunctionComponent = () => {
  return (
    <div className={cx("container")}>
      <section className={cx("section", "fullCenter")}>
        <Intro />
        <div style={{ position: "absolute", bottom: 120, textAlign: "center" }}>
          <ScrollDown />
        </div>
      </section>
      <section className={cx("section", "resume")}>
        {/*<Profile />*/}
        <Resume />
      </section>
      {/*<Parallax pages={2} style={{ height: "100vh", minHeight: 700 }}>*/}
      {/*<ParallaxLayer offset={0.45} speed={1}>*/}
      {/*<Intro />*/}
      {/*</ParallaxLayer>*/}
      {/*<ParallaxLayer offset={0.85} speed={1}>*/}
      {/*<ScrollDown />*/}
      {/*</ParallaxLayer>*/}
      {/*<ParallaxLayer offset={1} speed={0}>*/}
      {/*<Profile />*/}
      {/*<Resume />*/}
      {/*</ParallaxLayer>*/}
      {/*</Parallax>*/}
    </div>
  );
};

export default AboutPage;
