require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://nicolasterol.com',
    title: `Nicolas Terol`,
    subtitle: `nterol's personal blog`,
    keywords: ['React', 'Javascript', 'Front-end'],
    description: `Hey ! I'm Nicolas and I'm a **front-end** developer.`,
    miniBio: `${new Date().getFullYear() -
      2016} years ago I wanted to understand how to build a web site. Turns out I enjoy coding so I made it my job !`,
    socials: {
      linkedin: 'https://linkedin.com/in/teroln',
      github: 'https://github.com/nterol',
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTICS_ID],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: { displayName: false },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          articles: require.resolve(`./src/templates/article-template.js`),
          quizzes: require.resolve('./src/templates/quiz-template.js'),
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
        name: `Quizzes`,
        path: `${__dirname}/src/content/quizzes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Articles`,
        path: `${__dirname}/src/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'Skills',
        path: `${__dirname}/src/content/skills`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/content/quizzes`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/content/articles`,
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
