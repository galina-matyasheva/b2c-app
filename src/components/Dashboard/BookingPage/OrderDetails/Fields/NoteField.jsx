import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

export const NoteField = ({
	isEdit = false,
	handleAddNote = () => {},
	classes,
	additionalNote,
}) => {
	const [showNoteField, handleSetNoteFieldOpen] = useState(false);

	return (
		<>
			<p>Note</p>
			<span className={classes.additionalNoteText}>
				{additionalNote.length > 0 && !showNoteField ? additionalNote : ""}
			</span>
			<div
				onClick={() => handleSetNoteFieldOpen(!showNoteField)}
				className={classes.addNoteButton}
			>
				<EditOutlinedIcon />
				{showNoteField
					? "Save Note"
					: additionalNote.length > 0
					? "Edit note"
					: "Add Note"}
			</div>
			<TextField
				disabled={!isEdit}
				style={showNoteField ? { display: "block" } : { display: "none" }}
				multiline
				rowsMax={4}
				className={classes.noteTextField}
				defaultValue={additionalNote}
				onChange={(e) => handleAddNote(e.target.value)}
				id="outlined-basic"
				variant="outlined"
			/>
		</>
	);
};
