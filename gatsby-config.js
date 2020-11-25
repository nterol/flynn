module.exports = {
  siteMetadata: {
    siteUrl: 'https://nicolasterol.com',
    title: `Nicolas Terol`,
    subtitle: `nterol's personal blog`,
    description: `Hey ! I'm Nicolas and I'm a **front-end** developer.`,
    miniBio: `${new Date().getFullYear() -
      2016} years ago I wanted to understand how to build a web site. Turns out I enjoy coding so I made it my job !`,
    socials: {
      linkedin: 'https://linkedin.com/in/nterol',
      github: 'https://github.com/nterol',
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: { displayName: false },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/templates/article-template.js`),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
