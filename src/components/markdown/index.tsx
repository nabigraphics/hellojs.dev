import React, { FunctionComponent } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

// Text
const Text: FunctionComponent = ({ children }) => (
  <p className={cx("text")}>{children}</p>
);

// Heading
const H1: FunctionComponent = ({ children }) => (
  <h1 className={cx("heading", "h1")}>{children}</h1>
);

const H2: FunctionComponent = ({ children }) => (
  <h2 className={cx("heading", "h2")}>{children}</h2>
);

const H3: FunctionComponent = ({ children }) => (
  <h3 className={cx("heading", "h3")}>{children}</h3>
);

const H4: FunctionComponent = ({ children }) => (
  <h4 className={cx("heading", "h4")}>{children}</h4>
);

const H5: FunctionComponent = ({ children }) => (
  <h5 className={cx("heading", "h5")}>{children}</h5>
);

const H6: FunctionComponent = ({ children }) => (
  <h6 className={cx("heading", "h6")}>{children}</h6>
);

// Code Snippets
const Pre: FunctionComponent = ({ children }) => (
  <pre className={cx("pre")}>{children}</pre>
);

const Code: FunctionComponent = ({ children }) => (
  <code className={cx("code")}>{children}</code>
);

// Italic
const Em: FunctionComponent = ({ children }) => (
  <em className={cx("em")}>{children}</em>
);

// List
const List: FunctionComponent = ({ children }) => (
  <ul className={cx("ul")}>{children}</ul>
);

const ListItem: FunctionComponent = ({ children }) => (
  <li className={cx("li")}>{children}</li>
);

// Break

const Break: FunctionComponent = ({ children }) => (
  <hr className={cx("hr")}>{children}</hr>
);

export { Text, H1, H2, H3, H4, H5, H6, Pre, Code, Em, List, ListItem, Break };
