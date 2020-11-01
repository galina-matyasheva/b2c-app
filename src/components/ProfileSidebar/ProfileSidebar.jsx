import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { ProfileMenu } from "./ProfileMenu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: "#162E44",
		height: "100vh",
		position: "fixed",
		width: "6%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"@media screen and (max-width: 950px)": {
			position: "relative",
			width: "10%",
		},
		"@media screen and (max-width: 550px)": {
			width: "15%",
		},
	},
	rootActive: {
		backgroundColor: "#162E44",
		height: "100vh",
		position: "fixed",
		width: "10%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	rootExpand: {
		height: 70,
		width: "10%",
	},
	bookings: {
		padding: 20,
		color: "#ffff",
		fontSize: 12,
		textAlign: "center",
	},
	newBooking: {
		textAlign: "center",
		color: "#27c588",
		fontSize: 12,
	},
	expandIcon: {
		display: "none",
		"@media screen and (max-width: 950px)": {
			display: "inline",
		},
	},
	icon: {
		width: 45,
		height: 45,
		borderRadius: "50%",
		fontSize: 20,
		background: "#9cc",
		lineHeight: "40px",
		textAlign: "center",
		margin: "15px auto",
		"& span": {
			display: "inline-block",
			verticalAlign: "middle",
			lineHeight: "normal",
			padding: "0 10px",
		},
	},
	mobileNavigation: {
		display: "none",
		"@media screen and (max-width: 950px)": {
			display: "block",
			"& ul": {
				margin: 0,
				padding: 0,
				display: "flex",
				flexDirection: "column",
				"& li": {
					padding: "7px 0px",
					listStyleType: "none",
					"& a": {
						textDecoration: "none",
						color: "#ffff",
					},
				},
			},
		},
	},
	profileImage: {
		display: "block",
		width: 45,
		height: 45,
		borderRadius: "50%",
		fontSize: 20,
		background: "#9cc",
		lineHeight: "40px",
		textAlign: "center",
		margin: "15px 0px",
		"& span": {
			display: "inline-block",
			verticalAlign: "middle",
			lineHeight: "normal",
			padding: "0 10px",
		},
		"@media screen and (max-width: 950px)": {
			display: "none",
		},
	},
}));
const mobileList = [
	{
		url: `/login`,
		label: "Sign Out",
		icon: ExitToAppIcon,
	},
];
export const ProfileSidebar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.mobileNavigation}>
				<div className={classes.icon}>
					<span>CL</span>
				</div>
				<ul>
					{mobileList.map((item, key) => (
						<Fragment key={key}>
							<li>
								<a
									href={item.url}
									onClick={() => sessionStorage.setItem("isLogged", false)}
								>
									{item.label}
								</a>
							</li>
						</Fragment>
					))}
				</ul>
			</div>
			<ProfileMenu classes={classes} />
			<div className={classes.bookings}>
				<FormatListBulletedOutlinedIcon fontSize="large" /> <p>Bookings</p>
			</div>
			<div className={classes.newBooking}>
				<AddCircleOutlineOutlinedIcon fontSize="large" />
				<p> New Booking</p>
			</div>
		</div>
	);
};
export default ProfileSidebar;
