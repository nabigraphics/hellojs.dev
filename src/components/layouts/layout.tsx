// import global scss
import "normalize.css";
import "scss/common.scss";
import "eva-icons/style/scss/eva-icons.scss";
// import modules
import React, { FunctionComponent } from "react";
import { useTransition, animated } from "react-spring";
import Helmet from "react-helmet";
import classNames from "classnames/bind";
import { MDXProvider } from "@mdx-js/tag";
// import components
import Header from "./header";
// import layout module scss
import styles from "./layout.module.scss";
import {
  Text,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Pre,
  Code,
  Em,
  List,
  ListItem,
  Break
} from "../markdown";

const cx = classNames.bind(styles);

const markdownTheme = {
  p: Text,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  code: Pre,
  inlineCode: Code,
  em: Em,
  ul: List,
  li: ListItem,
  hr: Break
};

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
      <MDXProvider components={markdownTheme}>
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
      </MDXProvider>
    </>
  );
};

export default Layout;
