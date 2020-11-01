import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import _ from "underscore";
import { Grid } from "@material-ui/core";

export const renderHeading = (
	bookingInfo,
	classes,
	history,
	setPhoneValidation
) => {
	const bookingState = [
		{
			text: "Upcoming",
			value: "upcomingRentals",
			icon: <DateRangeOutlinedIcon />,
		},
		{
			text: "Rental",
			value: "inRental",
			icon: <RoomOutlinedIcon />,
		},
		{
			text: "Returned",
			value: "inStock",
			icon: <ArrowRightAltOutlinedIcon />,
		},
	];
	return _.map(bookingInfo, (item, i) => {
		return (
			<Grid key={i} className={classes.headingContainer} container>
				<Grid
					item
					style={{ alignSelf: "center" }}
					onClick={() => {
						setPhoneValidation({
							value: null,
							isValid: true,
						});
						history.push("/dashboard");
					}}
				>
					<ArrowBackIosIcon className={classes.backButton} />
				</Grid>
				<Grid item className={classes.itemHeadingText}>
					<Grid
						container
						direction="column"
						className={classes.containerHeadingText}
					>
						<h1 data-tooltip={item.title}>{item.title}</h1>
						<p>Order ID: {item.orderId}</p>
					</Grid>
				</Grid>
				<Grid item className={classes.progressHeader}>
					<ul>
						{bookingState.map((state, i) => {
							const setIconCN = () => {
								if (
									item.orderDetails.state === "Returned" ||
									state.text === item.orderDetails.state
								)
									return classes.progressIconActive;
								if (
									(item.orderDetails.state === "Rental" &&
										state.text === "Rental") ||
									state.text === "Upcoming"
								)
									return classes.progressIconActive;
								else return classes.progressIcon;
							};
							const setLiCN = () => {
								if (
									item.orderDetails.state === "Returned" ||
									state.text === item.orderDetails.state
								)
									return "progressItemActive";
								if (
									(item.orderDetails.state === "Rental" &&
										state.text === "Rental") ||
									state.text === "Upcoming"
								)
									return "progressItemActive";
								else return "progressItem";
							};
							return (
								<li className={setLiCN()} key={i}>
									<div className={classes.progressContainer}>
										<div className={setIconCN()}>{state.icon}</div>
										<span className={classes.progressText}>{state.text}</span>
									</div>
								</li>
							);
						})}
					</ul>
				</Grid>
			</Grid>
		);
	});
};
export default renderHeading;
