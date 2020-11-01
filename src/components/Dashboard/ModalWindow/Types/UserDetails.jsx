import React, { useEffect, useState, useMemo } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "underscore";
import axios from "axios";
import { userFields } from "./emptyUserFields";
export const UserDetails = ({
	classes,
	isOpen,
	handleDialogAction,
	dialogTitleText,
	userDetails,
	setBookingData,
	bookingInfo,
}) => {
	const [countries, setCountries] = useState([]);
	const [countryValue, setCountryValue] = useState("");
	const [userDetailsFieldsData, setFieldsValues] = useState([]);
	const indexId = useMemo(
		() => countries.findIndex((item) => item.value === countryValue),
		[countries, countryValue]
	);
	// const [isValid, setIsValid] = useState(true);
	useEffect(() => {
		setFieldsValues(
			userDetails && Object.keys(userDetails).length
				? _.map(userDetails, (value, key) => ({
						handle: key,
						value: value,
						type:
							key === "country"
								? "autocomplete"
								: key === "countryCode" || key === "id"
								? "none"
								: "simple",
				  }))
				: userFields
		);
	}, [userDetails]);
	useEffect(() => {
		if (_.find(userDetails, (item, key) => key === "countryCode")) {
			setCountryValue(
				_.find(userDetails, (item, key) => key === "countryCode")
			);
		}
	}, [userDetails]);
	useEffect(() => {
		axios.get(`/country_en.json`).then((res) => {
			setCountries(res.data.data);
		});
	}, []);
	const handleSave = () => {
		let newData = bookingInfo;
		const result = (array, key) => {
			const initialValue = {};
			return array.reduce((obj, item) => {
				return {
					...obj,
					[item[key]]: item.value,
				};
			}, initialValue);
		};
		newData[0].userDetails = result(userDetailsFieldsData, "handle");
		setBookingData([...newData]);
		handleDialogAction();
	};
	const handleOnChangeField = ({ handle, value }) => {
		// setIsValid(value.length ? true : false);
		let result = [];
		result = userDetailsFieldsData.map((item, key) =>
			item.handle === handle ? { ...item, value: value } : item
		);
		setFieldsValues([...result]);
	};
	const handleCancel = () => {
		let newData = bookingInfo;
		newData[0].userDetails = {};
		setBookingData([...newData]);
		handleDialogAction();
	};
	// const handleOnBlur = (event, value) => {
	// 	setIsValid(event.value && event.value.length ? true : false);
	// };
	const renderFields = () => {
		return userDetailsFieldsData.map((item, i) => {
			switch (item.type) {
				case "simple":
					return (
						<TextField
							// onBlur={handleOnBlur}
							// error={!item.value.length}
							label={item.handle}
							value={item.value}
							onChange={(e) =>
								handleOnChangeField({
									value: e.target.value,
									handle: item.handle,
								})
							}
							placeholder={item.handle}
							variant="outlined"
							fullWidth
							required
						/>
					);
				case "autocomplete":
					return (
						<Autocomplete
							onChange={(e, value) => {
								setCountryValue(value.value);
								handleOnChangeField({
									value: value.name,
									handle: item.handle,
								});
							}}
							freeSolo={false}
							defaultValue={"Germany"}
							value={indexId !== -1 ? countries[indexId].label : ""}
							options={countries}
							getOptionLabel={(option) =>
								option.label ? option.label : option
							}
							renderInput={(params) => (
								<TextField
									multiline={true}
									{...params}
									label={"Choose country"}
									variant="outlined"
									fullWidth
								/>
							)}
						/>
					);
				default:
					break;
			}
		});
	};
	return (
		<Dialog
			open={isOpen}
			onClose={handleDialogAction}
			classes={{ paper: classes.userDetailsModal }}
			disableBackdropClick={true}
			disableEscapeKeyDown={true}
		>
			<DialogTitle
				id="alert-dialog-title"
				classes={{ root: classes.dialogTitle }}
			>
				{dialogTitleText}
			</DialogTitle>
			<DialogContent className={classes.userDetailsContent}>
				{renderFields()}
			</DialogContent>
			<DialogActions classes={{ root: classes.dialogActions }}>
				<Button className={classes.modal_btn} onClick={handleCancel}>
					Cancel
				</Button>
				<Button
					className={classes.modal_btn}
					classes={{
						root: classes.modal_btn,
						disabled: classes.disabledButton,
					}}
					onClick={handleSave}
					// disabled={isValid}
				>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};
