const lost = require('lost');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'HomeTown Static Base'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          lost(),
          autoprefixer()
        ]
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img/`
      }
    }
  ],
};
