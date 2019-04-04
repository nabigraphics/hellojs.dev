import React, { FunctionComponent } from "react";
import classNames from "classnames/bind";
import TextLoop from "components/textLoop";
// imoprt styles
import styles from "./intro.module.scss";

const cx = classNames.bind(styles);

const Intro: FunctionComponent = () => {
  return (
    <>
      <h1 className={cx("title")}>👋 Hello! I'm Jusung</h1>
      <TextLoop
        className={cx("subtitle")}
        interval={3000}
        prefix={`...and people say to me “oh, hi `}
        suffix={`!"`}
        queue={["Jusung", "JS", "nabi", "Javascript", "JSON", "Jsaon"]}
      />
    </>
  );
};

export default Intro;
