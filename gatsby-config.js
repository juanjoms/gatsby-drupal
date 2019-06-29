/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Discovering the World',
		titleHelper: 'Making your Life Easier'
	},

	plugins: [
		'gatsby-plugin-sass',
     {
       resolve: `gatsby-source-drupal`,
       options: {
         baseUrl: `http://dev-test-site-dl.pantheonsite.io/`,
       }
     }
  ]


}
