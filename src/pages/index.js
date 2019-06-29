import React from "react"
import Layout from "../components/layout";
import PostItem from "../components/post-item";

export default ({data}) => {
  const post = {
    id: 1,
    title: 'Dummy data',
    summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorum labore. Earum alias, iure veritatis consectetur odio quasi voluptatem ab est',
    created: 'March 24, 2018',
    category: 'CATEGORY',
    image: ''
  }
	return (
		<Layout>
      <PostItem key={post.id} post={post}></PostItem>
		</Layout>
	)
}