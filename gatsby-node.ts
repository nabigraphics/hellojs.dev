const path = require("path");
const resolve = {
  modules: [path.resolve(__dirname, "src"), "node_modules"],
  extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".css", ".json"]
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({ resolve });
};
