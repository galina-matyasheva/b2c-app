import React from "react";

import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const IntroducingPage = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Welcome to B2C Gearrilla</h1>
			<Button
				component={Link}
				to={`/login`}
				style={{
					backgroundColor: "#282d32",
					color: "#ffff",
					width: "max-content",
					margin: 10,
					padding: 10,
				}}
			>
				Login page (done)
			</Button>
			<Button
				component={Link}
				to={`/register`}
				style={{
					backgroundColor: "#282d32",
					color: "#ffff",
					width: "max-content",
					margin: 10,
					padding: 10,
				}}
			>
				Registration page (empty page)
			</Button>
		</div>
	);
};
export default IntroducingPage;
