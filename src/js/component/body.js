import React from "react";

import { Card } from "./card.js";
//create your first component
export function Body() {
	return (
		<div className="container-fluid d-flex justify-content-around">
			<Card
				title="Title 1"
				img="https://picsum.photos/500/325?random=1"
				text="Text is here"
				link=""
				button="Click Here"
			/>
			<Card
				title="Title 2"
				img="https://picsum.photos/500/325?random=2"
				text="Text is here"
				link=""
				button="Click Here"
			/>
			<Card
				title="Title 3"
				img="https://picsum.photos/500/325?random=3"
				text="Text is here"
				link=""
				button="Click Here"
			/>
			<Card
				title="Title 4"
				img="https://picsum.photos/500/325?random=4"
				text="Text is here"
				link=""
				button="Click Here"
			/>
		</div>
	);
}
