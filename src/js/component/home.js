import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbo.js";
import { Card } from "./card.js";
import { Body } from "./body.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<Body />
		</div>
	);
}
