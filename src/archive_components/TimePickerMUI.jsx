import React, { useState, useEffect } from "react";
import { TimePicker } from "@material-ui/pickers";
import moment from "moment";
import { ThemeProvider } from "@material-ui/styles";
import trasparentInput from "styles/trasparentInputWithCustomPalette";
export const TimePickerMUI = ({
	classes,
	type,
	hoursCallback = () => {},
	isEdit,
	value,
}) => {
	const [selectedHour, handleHoursChange] = useState(null);
	useEffect(() => {
		handleHoursChange(
			moment(`${value}`, "hh:mm").isValid() ? moment(`${value}`, "hh:mm") : null
		);
	}, [value, type]);
	const selectHourHandle = (value) => {
		handleHoursChange(moment(value).minutes(0));
		hoursCallback({
			type: type,
			value: moment(value).isValid()
				? moment(value).minutes(0).format("HH:mm")
				: "",
		});
	};
	return (
		<ThemeProvider theme={trasparentInput}>
			<TimePicker
				ampm={false}
				disableToolbar
				classes={{ root: classes.timePicker }}
				disabled={!isEdit}
				clearable={selectedHour}
				label={type}
				value={selectedHour}
				onChange={selectHourHandle}
				views={["hours"]}
				// variant="inline"
				orientation="landscape"
				autoOk
			/>
		</ThemeProvider>
	);
};
export default TimePickerMUI;
