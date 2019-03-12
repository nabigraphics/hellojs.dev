export = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/layouts/layout`)
      }
    }
  ]
};
