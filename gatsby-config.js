require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Generic Portfolio`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-image',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
