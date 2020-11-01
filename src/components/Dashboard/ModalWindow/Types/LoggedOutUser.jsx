import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export const LoggedOutUser = ({
	classes,
	history,
	isOpen,
	handleDialogAction,
	dialogTitleText,
}) => {
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
				{dialogTitleText}
			</DialogTitle>
			<DialogContent>
				<DialogContentText
					id="alert-dialog-description"
					classes={{ root: classes.dialogContentText }}
					style={{ textAlign: "center" }}
				>
					You need to sign-in to see content
				</DialogContentText>
			</DialogContent>
			<DialogActions classes={{ root: classes.dialogActions }}>
				<Button
					className={classes.modal_btn}
					onClick={() => history.push("/login")}
				>
					Sign-in
				</Button>
				<Button
					className={classes.modal_btn}
					onClick={() => history.push("/register")}
				>
					Sign-up
				</Button>
			</DialogActions>
		</Dialog>
	);
};
