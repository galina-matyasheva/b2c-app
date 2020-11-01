import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import logo from "../../img/logo-mint.svg";
import loginPic from "../../img/login-pic_bright.png";
import { Button } from "@material-ui/core";
export const LogInPage = ({ classes }) => {
	const [users, setUser] = useState("");
	const handleChange = (event) => {
		setUser(event.target.value);
	};
	const possibleUsers = [
		{ label: "User 1", value: "userOne" },
		{ label: "User 2", value: "userTwo" },
		{ label: "User 3", value: "userThree" },
	];
	let history = useHistory();
	const handleSignIn = () => {
    sessionStorage.isLogged = true;
		history.push("/dashboard");
	};
	return (
		<Grid container className={classes.container}>
			<Grid container className={classes.firstColumnBlock}>
				<Grid item className={classes.logoBlock}>
					<img src={logo} alt="logo" />
					<p>Gearrilla B2C</p>
				</Grid>
				<Grid item className={classes.formBlock}>
					<h1>Sign in to B2C</h1>
					<TextField
						id="standard-select-currency"
						select
						fullWidth
						placeholder="Choose user"
						value={users}
						onChange={handleChange}
						className={classes.textField}
					>
						{possibleUsers.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						defaultValue="choose"
						classes={{
							root: classes.textField,
						}}
						placeholder="6 digit pin"
						variant="outlined"
						fullWidth
						type="password"
					/>
					<Button onClick={handleSignIn} className={classes.buttonSignIn}>
						Sign in
					</Button>
				</Grid>
			</Grid>
			<Grid item className={classes.imgBlock}>
				<img alt="login_picture" src={loginPic}></img>
			</Grid>
		</Grid>
	);
};
