import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

export const StatusField = ({ classes, isEdit, status, handleSetData }) => {
	const ORDER_DETAILS = "orderDetails";
	const dropDownStatusValues = [
		{
			value: "ready",
			label: "Ready",
		},
		{
			value: "dirty",
			label: "Dirty",
		},
		{
			value: "damaged",
			label: "Damaged",
		},
		{
			value: "inInspection",
			label: "In inspection",
		},
	];
	return (
		<TextField
			style={{ width: "67%" }}
			select
			fullWidth
			disabled={!isEdit}
			placeholder="Status"
			value={status ? status.value : ""}
			onChange={(e) =>
				handleSetData({
					value: e.target.value,
					tab: ORDER_DETAILS,
					handle: "status",
				})
			}
			className={classes.textField}
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
		>
			{dropDownStatusValues.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};
export default StatusField;
