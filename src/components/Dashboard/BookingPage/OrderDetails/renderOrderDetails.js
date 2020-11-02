import React, {useEffect, useRef} from "react";
import _ from "underscore";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "./Fields/DateRangePiker";
import { TimePickerDropDown } from "./Fields/TimePickerDropDown";
import { StatusField } from "./Fields/StatusField";
import { NoteField } from "./Fields/NoteField";
import { AmountField } from "./Fields/AmountField";
const RenderFunction = (
	isEdit,
	bookingInfo,
	classes,
	additionalNote,
	handleSetData,
	handleAddNote,
    endDateRef
) => {
	const ORDER_DETAILS = "orderDetails";
	const datesCallback = (dates) =>
		handleSetData({ value: dates, handle: "dates", tab: ORDER_DETAILS });
	const hoursCallback = (payload) => {
		handleSetData({
			type: payload.type,
			value: payload.value,
			handle: "hours",
			tab: ORDER_DETAILS,
		});
	};

	// useEffect(()=>{
	//
	// });
    const dropDownChange = () => {
    	// autoFocusEndHour = true;
        console.log(endDateRef)
        endDateRef.current.focus()
    	console.log("dropDownChange")
    	//setTimeout(() => {input.focus()}, 100);
	};

    const focusEndHourInputField = input => {
		console.log("focusEndHourInputField");
		console.log(input);
		if (input) {
			setTimeout(() => {
				console.log('focus() timeout')
				input.focus()}, 100);
		}


	};

	return _.map(bookingInfo, (item, i) => {
		const itemOrder = item.orderDetails;
		return (
			<Grid container key={i} className={classes.orderDetailsContainer}>
				<Grid item className={classes.orderDetailsInfo}>
					<Grid
						className={classes.orderDetailTextContainer}
						container
						direction="column"
					>
						<p className={classes.orderDetailsHeading}>Order details</p>
						<Grid container justify="space-between">
							<p className={classes.orderDetailsListTitle}>Rent Date</p>
							<DatePicker
								datesCallback={datesCallback}
								isEdit={isEdit}
								startDateComponent={itemOrder.startDate}
								endDateComponent={itemOrder.endDate}
							/>

							<TimePickerDropDown
								classes={classes}
								dates={{
									startDate: itemOrder.startDate,
									endDate: itemOrder.endDate,
								}}
								type={"startHour"}
								isEdit={isEdit}
								defaultValue={itemOrder.startHour}
								chosenEndHour={itemOrder.endHour}
								hoursCallback={hoursCallback}
								classesRoot={classes.hoursInput}
								dropDownChange={dropDownChange}

							/>
							<TimePickerDropDown
								classes={classes}
								dates={{
									startDate: itemOrder.startDate,
									endDate: itemOrder.endDate,
								}}
								type={"endHour"}
								isEdit={isEdit}
								defaultValue={itemOrder.endHour}
								chosenStartHour={itemOrder.startHour}
								hoursCallback={hoursCallback}
								classesRoot={classes.hoursInput}
								// autoFocusEndHour={()=>{}}
								refInput={endDateRef}


							/>
						</Grid>
						<Grid
							container
							justify="space-between"
							style={{ padding: "15px 0px" }}
						>
							<AmountField
								startDate={itemOrder.startDate}
								endDate={itemOrder.endDate}
								dateTimeSet={{
									startDate: itemOrder.startDate,
									endDate: itemOrder.endDate,
									startHour: itemOrder.startHour,
									endHour: itemOrder.endHour,
								}}
								classes={classes}
								handleSetData={handleSetData}
								amount={itemOrder.amount}
								isEdit={isEdit}
							/>
						</Grid>
						<Grid container justify="space-between">
							<p className={classes.orderDetailsListTitle}>Status</p>{" "}
							<StatusField
								classes={classes}
								isEdit={isEdit}
								status={itemOrder.status}
								handleSetData={handleSetData}
							/>
						</Grid>
						<Grid item className={classes.noteContainer}>
							<NoteField
								isEdit={isEdit}
								classes={classes}
								handleAddNote={handleAddNote}
								additionalNote={additionalNote}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	});
};

export const renderOrderDetails = RenderFunction;
