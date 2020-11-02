import React, { useState, useEffect } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

export const AmountField = ({
	dateTimeSet,
	classes,
	handleSetData = () => {},
	amount,
	isEdit,
}) => {
	const ORDER_DETAILS = "orderDetails";
	const [calculatedAmount, setCalcAmount] = useState(amount.total);
	const amountInputProps = {
		startAdornment: (
			<InputAdornment position="start" className={classes.prefixStart}>
				€
			</InputAdornment>
		),
		readOnly: true,
	};
	useEffect(() => {
		setCalcAmount(calculateAmount());
	}, [dateTimeSet]);
	const calculateAmount = () => {
		const startDate = dateTimeSet.startDate;
		const endDate = dateTimeSet.endDate;
		const startHour = moment(dateTimeSet.startHour, "HH:mm");
		const endHour = moment(dateTimeSet.endHour, "HH:mm");

		if (!startDate || !endDate || !startHour || !endHour) {
			return 0;
		}
		const hourlyAmount = amount.hourly;
		const dailyAmount = amount.daily;
		let differenceDays = moment(endDate).diff(startDate, "days");
		let differenceHours = moment.duration(endHour.diff(startHour)).asHours();
		if (differenceDays && differenceHours) {
			return (
				hourlyAmount * differenceHours +
				dailyAmount * differenceDays
			).toFixed(2);
		}
		if (differenceHours) {
			return (hourlyAmount * differenceHours).toFixed(2);
		}
		if (differenceDays) {
			return (dailyAmount * differenceDays).toFixed(2);
		} else return amount.total;
	};
	return (
		<>
			<p className={classes.orderDetailsListTitle}>Amount</p>{" "}
			<Grid container className={classes.amountPriceContainer}>
				<p>{`Daily: ${amount.daily}`}€</p>
				<p>{`Hourly: ${amount.hourly}`}€</p>
			</Grid>
			<TextField
				type="number"
				disabled={!isEdit}
				className={classes.orderDetailsAmountValue}
				value={calculatedAmount}
				InputProps={amountInputProps}
				onChange={(e) =>
					handleSetData({
						value: e.target.value,
						handle: "amount",
						tab: ORDER_DETAILS,
					})
				}
			/>
		</>
	);
};
