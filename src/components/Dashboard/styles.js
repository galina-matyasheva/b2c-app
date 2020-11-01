export const styles = () => ({
	container: {
		minHeight: "100vh",
		marginLeft: "calc(100vw - 94%)",
		backgroundColor: "#f3f5f8",
		"@media screen and (max-width: 950px)": {
			marginLeft: 0,
			position: "relative",
		},
		"@media screen and (max-width: 550px)": {
			overflowX: "hidden",
		},
	},
	listElement: {
		userSelect: "none",
		padding: "7px 16px",
		width: "85%",
		margin: "10px auto",
		borderRadius: 8,
		"&:hover": {
			backgroundColor: "#dde2e63d !important",
		},
	},
	horizontalScrollContainer: {
		maxWidth: "100%",
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		boxSizing: "border-box",
		justifyContent: "space-evenly",
		"@media screen and (max-width: 550px)": {
			marginBottom: 8,
			paddingBottom: 8,
			flexWrap: "nowrap",
			maxWidth: "100vw",
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			padding: 8,
			overflow: "auto",
		},
	},
	rootDiv: {
		boxSizing: "border-box",
		padding: 12,
		justifyContent: "center",
		alignItems: "flex-start",
		"@media screen and (max-width: 550px)": {
			padding: "12px 0px 12px 12px",
			boxSizing: "border-box",
			display: "flex",
			"-webkit-box-pack": "center",
			justifyContent: "center",
			alignItems: "flex-start",
		},
	},
	columnContainer: {
		width: "28%",
		"@media screen and (max-width: 1315px)": {
			width: "27%",
		},
		"@media screen and (max-width: 550px)": {
			width: "100%",
		},
	},
	listStyle: {
		padding: "0px 8px",
		boxShadow: "0 0 8px rgba(0,0,0,0.12)",
		borderRadius: "10px 15px",
		height: "80vh",
		overflow: "overlay",
		"@media screen and (max-width: 1315px)": {
			height: "77vh",
		},
		"@media screen and (max-width: 550px)": {
			width: 270,
			verticalAlign: "top",
			margin: "0 4px",
			display: "flex",
			flexDirection: "column",
			userSelect: "none",
		},
	},
	dndContext: {
		display: "flex",
		flexDirection: "column",
	},
	dashboardTitle: {
		margin: 0,
		color: "#282d32",
		fontWeight: 400,
		padding: 30,
		"@media screen and (max-width: 950px)": {
			padding: "0px 30px 30px",
		},
		"@media screen and (max-width: 550px)": {
			padding: "0px 12px 30px",
		},
	},
	columnHeader: {
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 20,
	},
	columnHeaderTitle: {
		width: 180,
		fontWeight: 500,
		fontSize: 14,
		borderRadius: "0px 0px 10px 10px",
		padding: "10px 5px",
		textAlign: "center",
		margin: "0 20px",
		color: "#ffff",
		"@media screen and (max-width: 1120px)": {
			width: 160,
			margin: "0 8px",
		},
		"@media screen and (max-width: 769px)": {
			width: 140,
			margin: 0,
			fontSize: 12,
		},
	},
	dateBlock: {
		paddingTop: 15,
	},
	gearStatus: {
		textTransform: "uppercase",
		color: "#ffff",
		borderRadius: 8,
		padding: "2px 8px",
		fontSize: 12,
		fontWeight: 500,
		"@media screen and (max-width: 769px)": {
			fontSize: 10,
		},
	},
	countItems: {
		display: "inline",
		color: "#aaacae",
		fontSize: 13,
		fontWeight: 400,
	},
	imgItem: {
		paddingRight: 10,
	},
	gearPic: {
		width: 35,
		height: 35,
		borderRadius: "50%",
		overflow: "hidden",
		border: "1px #dbdbdb solid",
		objectFit: "contain",
	},
	categoryText: {
		textTransform: "uppercase",
		fontWeight: 700,
		fontSize: 13,
		color: "#939597",
		margin: "10px 0px 0px",
		"@media screen and (max-width: 769px)": {
			margin: "3px 0px 0px",
		},
	},
	limitedWidthCategoryText: {
		textTransform: "uppercase",
		fontWeight: 700,
		fontSize: 13,
		color: "#939597",
		margin: "10px 0px 0px",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden",
		textDecoration: "none",
		"@media screen and (max-width: 950px)": {
			maxWidth: 73,
			margin: "3px 0px 0px",
		},
	},
	titleText: {
		color: "#2b3034",
		textDecoration: "none",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		maxWidth: 225,
		fontWeight: 500,
		margin: "15px 0px 0px",
		"&:hover": {
			color: "#2b577a",
		},
		"@media screen and (max-width: 1120px)": {
			maxWidth: 155,
		},
		"@media screen and (max-width: 769px)": {
			maxWidth: 128,
		},
	},
	rentalText: {
		margin: "7px 0px",
		color: "#9daebc",
		fontSize: 13,
	},
	calendarIcon: {
		marginRight: 5,
		color: "#9daebc",
	},
	expandIcon: {
		display: "none",
		padding: "12px 32px",
		"@media screen and (max-width: 950px)": {
			display: "block",
		},
		"@media screen and (max-width: 550px)": {
			padding: 12,
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
	infiniteScrollLoadingText: { padding: 12 },
});
