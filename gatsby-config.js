module.exports = {
  siteMetadata: {
    title: `nz.js(con); 2020`,
    description: `nz.js(con); 2020 website - NZ JavaScript conference`,
    author: `@javascript_nz`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nz.js(con);`,
        short_name: `nz.js(con);`,
        start_url: `/`,
        background_color: `#F0DB4F`,
        theme_color: `#F0DB4F`,
        display: `minimal-ui`,
        icon: `src/images/nz-dot-js-con-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Turret Road",
              variants: ["300"],
              subsets: ['latin', 'latin-ext'],
              fontDisplay: 'block',
              strategy: 'selfHosted',
            },
            {
              family: "M PLUS Rounded 1c",
              variants: ["500", "700"],
              subsets: ['latin', 'latin-ext'],
              fontDisplay: 'block',
              strategy: 'selfHosted',
            },
          ],
        },
        formats: ['woff2', 'woff'],
      },
    },
  ],
}
