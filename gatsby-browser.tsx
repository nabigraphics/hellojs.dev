import React from "react";
import Layout from "components/layouts/layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onClientEntry = () => {
  require("core-js/modules/es6.symbol");
  require("core-js/es6/set");
  require("core-js/es6/map");
  require("core-js/modules/es6.array.find-index");
  require("core-js/modules/es6.array.fill");
  require("core-js/modules/es6.array.from");
  require("core-js/modules/es7.object.values");
  require("core-js/modules/es7.object.entries");
  require("core-js/modules/es7.symbol.async-iterator");
  require("core-js/modules/es6.string.starts-with");
};
