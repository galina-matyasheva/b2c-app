import React, { useState, Fragment, useEffect } from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { ThemeProvider } from "@material-ui/styles";
import trasparentInput from "styles/trasparentInputWithCustomPalette";
const useStyles = makeStyles({
	textFieldDatePicker: {
		"&:hover": {
			"& .MuiOutlinedInput-notchedOutline": {
				borderColor: "#3f70e2",
			},
		},
	},
	focused: {
		borderColor: `#dbdbdb`,
	},
	hover: {
		"&:hover": {
			"& .MuiOutlinedInput-notchedOutline": {
				borderColor: "transparent !important",
			},
		},
	},
	root: {
		"@media screen and (max-width: 770px)": {
			width: "100%",
		},
	},
});

export const DatePicker = ({
	isEdit = false,
	isLoading,
	startDateComponent,
	endDateComponent,
	label,
	fullWidth = false,
	datesCallback,
}) => {
	const classes = useStyles();
	const [focusedInput, setFocused] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [focusClass, setFocusClass] = useState("");
	const [hoverClass, setHoverClass] = useState("");

	useEffect(() => {
		if (startDateComponent !== null && endDateComponent !== null)
			if (startDateComponent.length || endDateComponent.length) {
				const startDateObj = moment(startDateComponent);
				const endDateObj = moment(endDateComponent);
				//
					setStartDate(startDateObj);
					setEndDate(endDateObj);

			}
	}, [startDateComponent, endDateComponent]);

	const onFocusChange = (focusedInput) => {
		setFocused(focusedInput);
		focusedInput ? setFocusClass(classes.focused) : setFocusClass("");
		focusedInput ? setHoverClass(classes.hover) : setHoverClass("");
	};
	const handleDateChange = ({ startDate, endDate }) => {
		setStartDate(startDate);
		setEndDate(endDate);
		if (startDate !== null && endDate !== null) {
			datesCallback({
				startDate: moment(startDate).format("YYYY-MM-DD"),
				endDate: moment(endDate).format("YYYY-MM-DD"),
			});
		} else {
			datesCallback({
				startDate: null,
				endDate: null,
			});
		}

		// if (startDate > endDate){
		//
		// }
	};

	const orientation = window.matchMedia("(max-width: 991px)").matches
		? "verticalScrollable"
		: "horizontal";
	const fullscreen = window.matchMedia("(max-width: 991px)").matches
		? true
		: false;
	const showClearDates = true;
	const numberOfMonths = window.matchMedia("(max-width: 991px)").matches
		? 4
		: 2;
	const disableScroll = window.matchMedia("(max-width: 991px)").matches
		? true
		: false;

	const inputProps = {
		startDatePlaceholderText: "start Date",
		endDatePlaceholderText: "end Date",
		noBorder: true,
		customArrowIcon: `-`,
		hideKeyboardShortcutsPanel: true,
		startDate: startDate,
		endDate: endDate,
		focusedInput: focusedInput,
		onFocusChange: onFocusChange,
		onDatesChange: handleDateChange,
		orientation: orientation,
		showClearDates: showClearDates,
		disableScroll: disableScroll,
		numberOfMonths: numberOfMonths,
		withFullScreenPortal: fullscreen,
		startDateId: `startDateInput`,
		endDateId: `endDateInput`,
		autoFocus: false,
		minimumNights: 0,
		onFocus: () => {
			window.innerWidth < 767 &&
				document.getElementById("group").scrollIntoView(true);
		},
		displayFormat: "DD-MM-YYYY",
		disabled: !isEdit,
	};
	return (
		<Fragment>
			<ThemeProvider theme={trasparentInput}>
				<TextField
					variant="outlined"
					fullWidth
					classes={{
						root: classes.root,
					}}
					InputProps={{
						inputComponent: DateRangePicker,
						inputProps: inputProps,
						classes: {
							root: hoverClass,
							notchedOutline: focusClass,
						},
					}}
				/>
			</ThemeProvider>
		</Fragment>
	);
};
