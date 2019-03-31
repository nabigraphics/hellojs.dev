// import global scss
import "normalize.css";
import "scss/common.scss";
import "eva-icons/style/scss/eva-icons.scss";
// import modules
import React, { FunctionComponent } from "react";
import { useTransition, animated } from "react-spring";
import Helmet from "react-helmet";
import classNames from "classnames/bind";
// import components
import Header from "./header";
// import layout module scss
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

const Layout: FunctionComponent = ({ children }) => {
  // react-spring transitions
  const transitions = useTransition(children, item => item.key, {
    native: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={"Jusung Hwang (nabigraphics)"}
        link={[
          {
            href: "css/normalize.css",
            rel: "stylesheet",
            type: "text/css"
          }
        ]}
      />
      <Header />
      <div className={cx("layoutWrapper")}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              ...props,
              position: "absolute",
              width: "100%"
            }}
          >
            {item}
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default Layout;
