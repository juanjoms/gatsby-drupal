import React from "react"
import "./header.scss";

export default ({title, titleHelper}) => (
	<div className="header">
		<div className="title-helper">{ titleHelper }</div>
		<h2>{ title }</h2>
	</div>
)