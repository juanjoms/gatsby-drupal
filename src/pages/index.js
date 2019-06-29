import React from "react"
import Layout from "../components/layout";
import PostItem from "../components/post-item";

export default (props) => {
  const posts = props.data.allNodePost.nodes.map((node) => {
    return {
      id: node.id,
      title: node.title,
      summary: node.body.summary,
      created: node.created,
      category: node.relationships.field_category.name,
      image: node.field_image_url,
      path: node.path.alias
    }
  })

	return (
		<Layout>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          posts.map((post) => <PostItem key={post.id} post={post}></PostItem>)
        }

      </div>
		</Layout>
	)
}


export const query = graphql`
  {
    allNodePost (sort: {fields: created}) {
      nodes {
        id
        title
        body {
          summary
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
`