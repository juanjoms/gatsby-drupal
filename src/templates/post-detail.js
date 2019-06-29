import React from 'react';
import styles from './post-detail.module.scss';
import Layout from './../components/layout';
import { Link } from 'gatsby';

export default ({data}) => {
	const randomImage = data.nodePost.field_image_url;
	const description = data.nodePost.body.value;
	return (
		<Layout>
			<div className={styles.postDetail}>
				<div className={styles.heroBanner} style={{backgroundImage: `url(${randomImage})`}}  >
					<Link to="/" className={styles.backButton}>
						<span style={{fontSize: '2rem'}}>‹ </span>
						View Posts
					</Link>
					<h2 className={styles.title}>
						{data.nodePost.title}
					</h2>
				</div>
				<div className={styles.postInfo}>
					{data.nodePost.created}
				</div>
				<div className={styles.postDescription}  dangerouslySetInnerHTML={{__html: description}}></div>
			</div>
		</Layout>
	)
}

export const query = graphql`
  query ($id: String!){
    nodePost(id: {eq: $id}) {
      title
      body {
        value
      }
			created(formatString: "MMM DD, YYYY")
			field_image_url
    }
  }
`;