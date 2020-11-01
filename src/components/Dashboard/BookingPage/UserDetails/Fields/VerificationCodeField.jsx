import React from "react";
import TextField from "@material-ui/core/TextField";

export const VerificationCodeField = ({ code, setCode, isVerified }) => {
	return (
		<TextField
			variant="outlined"
			style={!isVerified ? { display: "none" } : { display: "block" }}
			value={code ?? ''}
			onChange={(e) => setCode(e.target.value)}
		/>
	);
};
