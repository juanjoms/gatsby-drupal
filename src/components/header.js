import React from "react"
import "./header.scss";

export default (props) => (
	<div className="header">
		<div className="title-helper">{ props.titleHelper }</div>
		<h2>{ props.title }</h2>
	</div>
)