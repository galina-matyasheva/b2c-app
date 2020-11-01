import React from "react";
import { ConfirmationDashboard } from "./Types/ConfirmationDashboard";
import { LoggedOutUser } from "./Types/LoggedOutUser";
import { UserDetails } from "./Types/UserDetails";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	closeButton: {
		position: "absolute",
		right: 8,
		top: 8,
		color: "#47525d",
		cursor: "pointer",
	},
	dialogActions: {
		justifyContent: "center",
	},
	setStatusBlock: {
		alignItems: "center",
		display: "flex",
		paddingTop: 20,
		justifyContent: "space-between",
	},
	dialogTitle: {
		textAlign: "center",
	},
	textField: {
		border: "1px #979797 solid",
		borderRadius: 30,
		alignSelf: "center",
		height: 40,
		backgroundColor: "#ffff",
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "transparent",
			},
			"&:hover fieldset": {
				borderColor: "#d9e3f9",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#d9e3f9",
			},
		},
		"& .MuiInput-root": {
			height: "100%",
			textAlign: "start",
			paddingLeft: 12,
			borderColor: "#d9e3f9",
			"&:focus": {
				backgroundColor: "transparent !important",
			},
			"&:before": {
				borderBottom: "none !important",
				"&:hover": {
					borderBottom: "none",
				},
			},
			"&:after": {
				borderBottom: "none !important",
			},
			"& .MuiSelect-select:focus": {
				backgroundColor: "transparent !important",
			},
		},
	},
	modal_btn: {
		borderRadius: 4,
		fontSize: "0.785em",
		padding: "12px 36px",
		fontWeight: 700,
		letterSpacing: 1,
		boxShadow: "none",
		backgroundColor: "#3f70e2",
		margin: "0 20px",
		color: "#ffff",
		width: 150,
		height: 50,
		"&:hover": {
			backgroundColor: "steelblue",
		},
	},
	maxSize: {
		width: 420,
		padding: 10,
	},
	userDetailsModal: {
		maxHeight: "calc(100vh - 30%)",
		height: "100%",
		width: 420,
		padding: 10,
	},
	userDetailsContent: {
		display: "flex",
		justifyContent: "space-around",
		flexDirection: "column",
	},
	disabledButton: {
		backgroundColor: "#eee !important",
	},
}));
export const ModalWindow = (props) => {
	const classes = useStyles();
	const switchContentByType = (modalWindowType) => {
		switch (modalWindowType) {
			case "confirmationDashboard":
				return <ConfirmationDashboard classes={classes} {...props} />;
			case "loggedOutUser":
				return <LoggedOutUser classes={classes} {...props} />;
			case "userDetails":
				return <UserDetails classes={classes} {...props} />;
			default:
				break;
		}
	};
	return <>{switchContentByType(props.modalWindowType)} </>;
};
export default ModalWindow;
