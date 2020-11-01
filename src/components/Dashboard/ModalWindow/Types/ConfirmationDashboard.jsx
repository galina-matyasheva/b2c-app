import React, { Fragment, useState, useEffect } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import _ from "underscore";
export const ConfirmationDashboard = ({
	classes,
	submitHandle,
	isOpen,
	handleDialogAction,
	goBackHandle,
	dialogTitleText,
	history,
}) => {
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
	const [statusValue, setStatus] = useState("inInspection");
	const handleSetStatus = (value) => {
		setStatus(value);
	};
	const submit = () => {
		submitHandle(
			_.find(dropDownStatusValues, (item) => item.value === statusValue)
		);
		setStatus("inInspection")
	};
	return (
		<Dialog
			open={isOpen}
			onClose={handleDialogAction}
			classes={{ paper: classes.maxSize }}
			disableBackdropClick={true}
			disableEscapeKeyDown={true}
		>
			<DialogTitle
				id="alert-dialog-title"
				classes={{ root: classes.dialogTitle }}
			>
				<CloseIcon
					onClick={goBackHandle || history.push("/dashboard")}
					className={classes.closeButton}
				/>
				{dialogTitleText}
			</DialogTitle>
			<DialogContent>
				<DialogContentText
					id="alert-dialog-description"
					classes={{ root: classes.dialogContentText }}
				>
					Do you want to replace booking to 'In stock'?
				</DialogContentText>
				<div className={classes.setStatusBlock}>
					You can set status:
					<TextField
						style={{ width: "50%" }}
						select
						fullWidth
						placeholder="Status"
						defaultValue={"inInspection"}
						onChange={(e) => handleSetStatus(e.target.value)}
						// value={statusValue}
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
				</div>
			</DialogContent>
			<DialogActions classes={{ root: classes.dialogActions }}>
				<Fragment>
					<Button className={classes.modal_btn} onClick={submit}>
						Confirm
					</Button>
				</Fragment>
			</DialogActions>
		</Dialog>
	);
};
