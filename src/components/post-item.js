import React from 'react';
import styles from './post-item.module.scss';
import { Link } from 'gatsby';

export default ({post}) => {
	return (
		<div className={styles.post}>
			<Link to={post.path}>
				<div style={{backgroundImage: 'url('+ post.image +')'}} className={styles.postBackground}>
					<div className={styles.postContent}>
						<h3 className={styles.postTitle}>
							{post.title}
						</h3>
						<div className={styles.postComments}>2 Comments</div>
						<div className={styles.postDescription} dangerouslySetInnerHTML={{__html: post.summary}}></div>
						<div className={styles.postInfo}> {post.category}
							<span className={styles.postDate}>{post.created}</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

