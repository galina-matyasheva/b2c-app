export const styles = () => ({
	container: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
		height: "100vh",
		marginLeft: "calc(100vw - 96%)",
		backgroundColor: "#f3f5f8",
		"@media screen and (max-width: 950px)": {
			marginLeft: 0,
			width: "100%",
			position: "relative",
		},
	},
	headingContainer: {
		justifyContent: "space-between",
		padding: "30px 0",
		width: "90%",
		margin: "0 auto",
		"@media screen and (max-width: 950px)": {
			padding: 0,
			paddingBottom: 30,
		},
	},
	bookingContainer: {
		flexWrap: "unset",
		height: 670,
		justifyContent: "space-between",
		padding: "30px 50px",
		width: "90%",
		margin: "0 auto",
		backgroundColor: "#fff",
		boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 8px",
		borderRadius: 12,
		marginBottom: 30,
		"@media screen and (max-width: 1060px)": {
			flexWrap: "wrap",
			padding: "0px 50px 30px",
			overflowY: "auto",
			maxHeight: "calc(100vh - 29%)",
			height: "auto",
		},
		"@media screen and (max-width: 768px)": {
			maxHeight: 700,
		},
	},
	itemHeadingText: {
		flexGrow: 1,
		alignSelf: "center",
		"@media screen and (max-width: 1060px)": {
			width: "50%",
		},
		"@media screen and (max-width: 550px)": {
			width: "30%",
		},
	},
	containerHeadingText: {
		"& h1": {
			fontSize: 25,
			color: "#282d32",
			margin: "10px 0px",
			maxWidth: "90%",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			textDecoration: "none",
			overflow: "hidden",
			fontWeight: 400,
			"@media screen and (max-width: 550px)": {
				fontSize: 19,
			},
		},
		"& p": {
			fontSize: 14,
			color: "#939597",
			margin: 0,
		},
		"& [data-tooltip]": {
			"&:after": {
				position: "absolute",
				top: "8%",
				left: "30%",
				width: "max-content",
				background: "rgba(0, 0, 0, 0.5)",
				color: "#fff",
				padding: "0.5em",
				maxWidth: 300,
				boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
				content: "attr(data-tooltip)",
				opacity: 0,
				fontSize: 12,
				transition: "0.2s",
				"@media screen and (max-width: 550px)": {
					top: "17%",
					left: "16%",
				},
			},
			"&:hover": {
				"&:after": {
					opacity: 1,
				},
			},
		},
	},
	progressHeader: {
		width: 350,
		color: "#939597",
		"& ul": {
			listStyle: "none",
			display: "flex",
			width: "100%",
			padding: 0,
			position: "relative",
			margin: 0,
			"& li": {
				width: "100%",
				position: "relative",
				"&:first-child::before": {
					display: "none",
				},
				"&:last-child::after": {
					display: "none",
				},
				"&.progressItemActive::before": {
					content: `''`,
					position: "absolute",
					height: 2,
					background: "#3f70e2",
					left: 0,
					top: 20,
					width: "50%",
				},
				"&.progressItemActive::after": {
					content: `''`,
					position: "absolute",
					height: 2,
					background: "#3f70e2",
					right: 0,
					top: 20,
					width: "50%",
				},
				"&::before": {
					content: `''`,
					position: "absolute",
					height: 2,
					background: "#aaacae",
					left: 0,
					top: 20,
					width: "50%",
				},
				"&::after": {
					content: `''`,
					position: "absolute",
					height: 2,
					background: "#aaacae",
					right: 0,
					top: 20,
					width: "50%",
				},
			},
		},
		"@media screen and (max-width: 1060px)": {
			width: "42%",
		},
		"@media screen and (max-width: 550px)": {
			width: "50%",
			"& span": {
				fontSize: 14,
			},
		},
	},
	progressContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
	},
	progressIconActive: {
		marginBottom: 5,
		color: "#fff",
		position: "relative",
		zIndex: 5,
		width: 40,
		height: 40,
		backgroundColor: "#3f70e2",
		border: "solid 3px #3f70e2",
		borderRadius: "50%",
		borderColor: " #3f70e2",
		"& svg": {
			margin: "7px 0px",
		},
		"@media screen and (max-width: 550px)": {
			width: 33,
			height: 33,
			"& svg": {
				fontSize: 20,
				margin: "6px 0px",
			},
		},
	},
	progressIcon: {
		marginBottom: 5,
		backgroundColor: "#f4f4f5",
		position: "relative",
		zIndex: 5,
		color: "#aaacae",
		width: 40,
		height: 40,
		borderRadius: "50%",
		border: "solid 3px #aaacae",
		"& svg": {
			margin: "7px 0px",
		},
	},
	backButton: {
		color: "black",
		cursor: "pointer",
		paddingRight: 20,
		"@media screen and (max-width: 550px)": {
			paddingRight: 8,
		},
	},
	orderDetailsPic: {
		width: "35%",
		height: "auto",
		maxHeight: 400,
		margin: 30,
		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "contain",
		},
		"@media screen and (max-width: 1060px)": { flexGrow: 1, width: "100%" },
	},
	orderDetailsInfo: {
		width: 243,
	},
	orderDetailsHeading: {
		textTransform: "uppercase",
		color: "#939597",
		fontWeight: 600,
	},
	orderDetailsListTitle: {
		color: "#939597",
		fontWeight: 400,
	},
	orderDetailsValues: {
		color: "#35393e",
	},
	orderDetailsAmountValue: {
		// marginRight: "45%",
		width: "65%",
		color: "#35393e",
		fontWeight: 600,
		// "& .MuiInput-root": {
		//   "&:before": {
		//     borderBottom: "none !important",
		//     "&:hover": {
		//       borderBottom: "none",
		//     },
		//   },
		// },
	},
	arrowRight: {
		"&::after": {
			content: `''`,
			display: "inline-block !important",
			width: 0,
			height: 0,
			borderLeft: "6px solid #aaacae",
			borderTop: "4px solid transparent",
			borderBottom: "4px solid transparent",
			verticalAlign: "middle",
		},
		"&::before": {
			width: 8,
			height: 2,
			background: "#aaacae",
			content: `''`,
			display: "inline-block",
			verticalAlign: "middle",
		},
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
	userDetailsFieldsContainer: {
		zIndex: 0,
		width: "20%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		"@media screen and (max-width: 1060px)": {
			height: 555,
			width: "40%",
		},
	},
	userDetailsContainer: {
		zIndex: 0,
		width: "25%",
		fontWeight: 200,
		"@media screen and (max-width: 1060px)": {
			width: "32%",
		},
	},
	orderDetailsContainer: {
		width: "30%",
		"@media screen and (max-width: 1060px)": {
			width: "50%",
		},
	},
	addNoteButton: {
		color: "#28cc8b",
		cursor: "pointer",
		paddingTop: 18,
		width: "max-content",
	},
	noteContainer: {
		display: "flex",
		flexDirection: "column",
		"& p": {
			textTransform: "uppercase",
			color: "#939597",
			fontWeight: 600,
			marginTop: 20,
		},
	},
	noteTextField: {
		paddingTop: 30,
		height: 80,
		maxWidth: 300,
		"& .MuiInputBase-root": {
			height: "100%",
			width: "100%",
		},
	},
	additionalNoteText: {
		maxWidth: 270,
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		textDecoration: "none",
		overflow: "hidden",
	},
	amountPriceContainer: {
		"& p": {
			marginTop: 0,
			width: "50%",
			fontWeight: 400,
		},
	},
	expandIcon: {
		display: "none",
		alignSelf: "start",
		padding: "12px 32px",
		"@media screen and (max-width: 950px)": {
			display: "block",
		},
		"@media screen and (max-width: 550px)": {
			padding: 12,
		},
	},
	buttonsBlock: {
		padding: "0px 4%",
		alignSelf: "flex-end",
		"& button": {
			backgroundColor: "#3f70e2",
			margin: "0 20px",
			color: "#ffff",
			width: 100,
			height: 50,
			"&:hover": {
				backgroundColor: "steelblue",
			},
		},
	},
	verifyPhoneBlock: {
		display: "flex",
		flexDirection: "column",
		maxHeight: 260,
		height: "100%",
		justifyContent: "space-around",
	},
	disabledButton: {
		backgroundColor: "#eee !important",
	},
	verifyPhoneNumberButton: {
		backgroundColor: "#3f70e2",
		margin: 0,
		color: "#ffff",
		width: 130,
		height: 50,
		alignSelf: "flex-end",
		"&:hover": {
			backgroundColor: "steelblue",
		},
	},
	timePicker: {
		marginTop: 15,
		width: "45%",
	},
	hoursInput: {
		width: 100,
		paddingTop: 20,
		height: 46,
		"& .MuiOutlinedInput-root": {
			height: "100%",
			"& .MuiSelect-select": {
				"&:focus": {
					padding: "13px !important",
				},
			},
		},
	},
});
