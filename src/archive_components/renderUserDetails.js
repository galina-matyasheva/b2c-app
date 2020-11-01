import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import Grid from "@material-ui/core/Grid";
import _ from "underscore";

const RenderFunction = (isEdit, classes, userDetails, countries, indexId) => {
	const fields = _.map(userDetails, (value, key) => ({
		handle: key,
		value: value,
		type:
			key === "country"
				? "autocomplete"
				: key === "countryCode" || key === "id"
				? "none"
				: "simple",
	}));
	const renderFields = () => {
		return fields.map((item, i) => {
			switch (item.type) {
				case "simple":
					return (
						<TextField
							disabled={!isEdit}
							label={item.handle}
							defaultValue="choose"
							value={item.value}
							// classes={{
							//   root: classes.textField,
							// }}
							placeholder={item.handle}
							variant="outlined"
							fullWidth
						/>
					);
				case "autocomplete":
					return (
						<Autocomplete
							disabled={!isEdit}
							//   onBlur={handleOnBlur}
							onChange={handleChange}
							defaultValue={countries[indexId]}
							freeSolo={false}
							//   className={className}
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
	const renderUserDetails = () => {
		return (
			<div>
				<p style={{ fontWeight: 400 }}>{userDetails.name}</p>
				<p
					style={{ lineHeight: 1.6 }}
				>{`${userDetails.street}, ${userDetails.postCode} ${userDetails.city}, ${userDetails.country}`}</p>
			</div>
		);
	};
	const handleChange = () => {};
	return (
		<Grid
			item
			className={
				isEdit
					? classes.userDetailsFieldsContainer
					: classes.userDetailsContainer
			}
		>
			<p className={classes.orderDetailsHeading}>User details</p>
			{isEdit ? renderFields() : renderUserDetails()}
		</Grid>
	);
};
export const renderUserDetails = RenderFunction;
