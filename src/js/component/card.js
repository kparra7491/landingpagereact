import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={props.img}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<hr />
				<a href={props.link} className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	link: PropTypes.string,
	button: PropTypes.string,
	img: PropTypes.string
};
