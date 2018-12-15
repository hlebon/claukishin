module.exports = {
  siteMetadata: {
    title: `ClauKishin`,
    subtitle: `Finanzas y mucho mas`
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== "production",
        labelFormat: "[local]",
        cssPropOptimization: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: "post"
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `claukishin`
      }
    },
    // for gatsby image
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
