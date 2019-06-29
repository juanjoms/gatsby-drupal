import React from 'react';
import styles from './post-detail.module.scss';
import Layout from './../components/layout';
import { Link } from 'gatsby';

export default ({data}) => {
	const randomImage = "https://source.unsplash.com/weekly?beach"
	const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas vero saepe odio in iure, ratione ex? Ducimus architecto soluta corrupti molestias sequi! Sequi consequuntur ex veniam tempora obcaecati, aspernatur nemo! <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas vero saepe odio in iure, ratione ex? Ducimus architecto soluta corrupti molestias sequi! Sequi consequuntur ex veniam tempora obcaecati, aspernatur nemo! <br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas vero saepe odio in iure, ratione ex? Ducimus architecto soluta corrupti molestias sequi! Sequi consequuntur ex veniam tempora obcaecati, aspernatur nemo!';
	return (
		<Layout>
			<div className={styles.postDetail}>
				<div className={styles.heroBanner} style={{backgroundImage: `url(${randomImage})`}}  >
					<Link to="/" className={styles.backButton}>
						<span style={{fontSize: '2rem'}}>‹ </span>
						View Posts
					</Link>
					<h2 className={styles.title}>
						Dummy Data
					</h2>
				</div>
				<div className={styles.postInfo}>
					March 03, 2019
				</div>
				<div className={styles.postDescription}  dangerouslySetInnerHTML={{__html: description}}></div>
			</div>
		</Layout>
	)
}