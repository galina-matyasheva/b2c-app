import React, { useState, useEffect } from "react";
import moment from "moment";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { hourOptions } from "../hourOptions";

export const TimePickerDropDown = ({
	classes,
	dates,
	type,
	isEdit,
	defaultValue,
	hoursCallback = () => {},
	classesRoot,
	chosenEndHour = null,
	chosenStartHour = null,
}) => {
	const [value, setValue] = useState(defaultValue);
	const [startHourError, setStartHourError] = useState(false);
	const [endHourError, setEndHourError] = useState(false);
	const [isEqualDates, setIsEqualDates] = useState(false);

	useEffect(() => {
		setIsEqualDates(moment(dates.startDate).isSame(dates.endDate, "day"));
	}, [dates]);

	useEffect(() => {
		isEqualDates ? setIsValid() : setEndHourError(false);
		if (
			moment(dates.startDate).isSame(moment(), "day") &&
			type === "startHour"
		) {
            const currentTime = moment().minutes(0).format("HH:mm");
            const nextHourValue = moment().minutes(0).add(1, 'hours').format("HH:mm")
			if (value < currentTime) {
				setValue(nextHourValue);
				hoursCallback({
					type: type,
					value: nextHourValue,
				});
			}
        }
        if (
            moment(dates.startDate).isSame(moment(), "day") &&
			type === "endHour"
        ) {
            if (value < chosenStartHour) {
				setValue(chosenStartHour);
				hoursCallback({
					type: type,
					value: chosenStartHour,
				});
			}
        }
	}, [isEqualDates, value, dates]);

	const setIsValid = () => {
		if (type === "endHour" && chosenStartHour && value.length !== 0) {
			parseInt(chosenStartHour) >= parseInt(value) ||
			parseInt(chosenStartHour) + 3 > parseInt(value)
				? setEndHourError(true)
				: setEndHourError(false);
		}
	};
	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	const setDisabledEqualDates = (optionValue) => {
		if (moment(dates.startDate).isSame(moment(), "day")) {
			const currentTime = moment().format("HH:mm");
			if (
				type === "endHour" &&
				chosenStartHour &&
				parseInt(chosenStartHour) + 2 < parseInt(optionValue)
			)
				return false;
			else
				return type === "startHour" && currentTime <= optionValue
					? false
					: type === "endHour" && !chosenStartHour
					? false
					: true;
		} else {
			if (type === "startHour") return false;
			if (
				type === "endHour" &&
				parseInt(chosenStartHour) + 2 < parseInt(optionValue)
			)
				return false;
			if (type === "endHour" && !chosenStartHour) return false;
			else return true;
		}
	};
	const setDisabledNotEqualDates = (optionValue) => {
		if (moment(dates.startDate).isSame(moment(), "day")) {
			const currentTime = moment().format("HH:mm");
			if (type === "endHour") return false;
			return type === "startHour" && currentTime <= optionValue ? false : true;
		} else return false;
	};
	const handleChange = (event) => {
		setValue(event.target.value);
		hoursCallback({
			type: type,
			value: event.target.value,
		});
	};

	const handleOnBlur = (event) => {
		setValue(event.target.value);
	};
	const setError = () => {
		if (type === "startHour" && startHourError) return true;
		if (type === "endHour" && endHourError) return true;
		else return false;
	};
	return (
		<TextField
			disabled={!isEdit}
			placeholder={type}
			onBlur={handleOnBlur}
			fullWidth={false}
			error={setError()}
			select
			value={value}
			onChange={handleChange}
			classes={{ root: classesRoot }}
			style={{ background: "#fff" }}
			className={classes.hoursTextField}
			SelectProps={{
				MenuProps: {
					style: {
						maxHeight: 400,
					},
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "center",
					},
					transformOrigin: {
						vertical: "top",
						horizontal: "center",
					},
					getContentAnchorEl: null,
				},
			}}
			variant="outlined"
		>
			{hourOptions[type].map((option, index) => (
				<MenuItem
					key={option.value}
					name={index}
					value={option.value}
					disabled={
						isEqualDates
							? setDisabledEqualDates(option.value)
							: setDisabledNotEqualDates(option.value)
					}
				>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};
