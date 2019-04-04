export = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-mdx",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/layouts/layout.tsx`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hellojs.dev`,
        short_name: `helloJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#016dff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        include_favicon: true
      }
    }
  ]
};
