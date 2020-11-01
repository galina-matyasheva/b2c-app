import React, { Fragment, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { ClickAwayListener } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const ProfileMenu = ({ classes }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	// const [timerId, setTimerId] = useState("");

	const handleOnMouseEnter = (event) => {
		setOpen(true);
		setAnchorEl(event.currentTarget);
		// setTimerId(
		// 	setTimeout(() => {
		// 		setOpen(false);
		// 		setAnchorEl(null);
		// 	}, 1500)
		// );
	};

	const handleClose = (url) => {
        // clearTimeout(timerId);
        if (url === '/login') {
            sessionStorage.setItem('isLogged', false)
        }
		setOpen(false);
		setAnchorEl(null);
	};

	// const handleOnMouseEnterMenu = () => {
	// 	clearTimeout(timerId);
	// };
	const menuItems = [
		// {
		// 	url: `/account`,
		// 	label: "Profile",
		// 	styleLi: "menuItem",
		// 	styleA: "menuItemText",
		// 	isMobile: false,
		// 	icon: PersonIcon,
		// },
		{
			url: `/login`,
			label: "Sign Out",
			styleLi: "menuItem",
			styleA: "menuItemText",
			isMobile: false,
			icon: ExitToAppIcon,
		},
	];
	return (
		<Fragment>
			<ClickAwayListener onClickAway={handleClose}>
				<div
					className={classes.profileImage}
					aria-controls="simple-menu"
					aria-haspopup="true"
					onMouseEnter={handleOnMouseEnter}
				>
					<span>CL</span>
				</div>
			</ClickAwayListener>
			<Menu
				autoFocus={false}
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				elevation={2}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: 2,
				}}
				classes={{
					paper: classes.paperRoot,
					list: classes.listMenu,
				}}
				PaperProps={{
					onMouseLeave: handleClose,
				}}
			>
				{menuItems.map((item, index) => (
					<MenuItem
						key={index}
						classes={{ root: classes.itemMenuProfile }}
						style={item.isMobile ? { display: "none" } : {}}
						component={"a"}
						onClick={() => handleClose(item.url)}
						// onMouseEnter={handleOnMouseEnterMenu}
						href={item.url}
					>
						<item.icon style={{ paddingRight: 20 }} /> {item.label}
					</MenuItem>
				))}
			</Menu>
		</Fragment>
	);
};
