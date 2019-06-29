const path = require('path');

// gatsby-node.js
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allNodePost {
        nodes {
          id
          title
          body {
            value
          }
          created(formatString: "MMMM DD, YYYY"),
          relationships {
            field_category {
              name
            }
          }
          field_image_url
          path {
            alias
          }
        }
      }
    }
  `).then(result => {

    result.data.allNodePost.nodes.forEach((node) => {
      createPage({
        path: node.path.alias,
        component: path.resolve(`./src/templates/post-detail.js`),
        context: {
          id: node.id
        },
      })
		})

  })
}