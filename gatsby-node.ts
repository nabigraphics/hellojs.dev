const path = require("path");
const resolve = {
  modules: [path.resolve(__dirname, "src"), "node_modules"],
  extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".css", ".json"]
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions
}) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    };
  }
  actions.setWebpackConfig({ resolve });
};
