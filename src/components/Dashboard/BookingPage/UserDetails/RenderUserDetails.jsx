import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { PhoneField } from "./Fields/PhoneField";
import Button from "@material-ui/core/Button";
import { users } from "./mocdata";
import { VerificationCodeField } from "./Fields/VerificationCodeField";
import { ModalWindow } from "components/Dashboard/ModalWindow/ModalWindow";
import _ from "underscore";
const RenderFunction = ({
	setPhoneValidation,
	phoneValidation,
	isEdit,
	classes,
	userDetails,
	goBackHandle,
	submitHandle,
	history,
	handleOnChange,
	setBookingData,
	bookingInfo,
}) => {
	const [isModalOpened, setOpenModal] = useState(false);
	const [isVerified, setVerified] = useState(false);
	const [code, setCode] = useState(null);
	const [invalidCode, setInvalidCode] = useState(false);
	const handleVerifyNumber = () => {
		let foundUser = bookingInfo;
		let userCode = null;
		if (_.find(users, (item) => item.phoneNumber === phoneValidation.value)) {
			foundUser[0].userDetails =
				_.find(users, (item) => item.phoneNumber === phoneValidation.value)
					.userDetails ?? {};
			userCode =
				_.find(users, (item) => item.phoneNumber === phoneValidation.value)
					.code ?? null;
		}
		if (userCode && userCode !== code) {
			setInvalidCode(true);
		} else {
			setBookingData([...foundUser]);
			setVerified(true);
			setOpenModal(true);
			setInvalidCode(false);
		}
	};
	const handleSendCode = () => {
		setVerified(true);
	};
	const handleDialogAction = () => setOpenModal(!isModalOpened);
	const renderVerifyUserPhone = () => {
		return (
			<div className={classes.verifyPhoneBlock}>
				<PhoneField
					setPhoneValidation={setPhoneValidation}
					phoneNumberValue={phoneValidation.value}
					isValid={phoneValidation.isValid}
				/>
				<VerificationCodeField
					setCode={setCode}
					code={code}
					classes={classes}
					isVerified={isVerified}
					phoneNumberValue={phoneValidation.value}
					isValid={phoneValidation.isValid}
				/>
				<p style={!invalidCode ? { display: "none" } : { display: "block" }}>
					{invalidCode ? "Code is invalid, try again" : null}
				</p>
				<Button
					classes={{
						root: classes.verifyPhoneNumberButton,
						disabled: classes.disabledButton,
					}}
					className={classes.verifyPhoneNumberButton}
					onClick={
						phoneValidation.isValid && !code
							? handleSendCode
							: handleVerifyNumber
					}
					disabled={
						!phoneValidation.isValid ||
						!phoneValidation.value ||
						(isVerified && !code) ||
						(code && code.length < 4)
					}
				>
					{isVerified ? "Verify" : "Send code"}
				</Button>
			</div>
		);
	};
	let isUserDetailsExist = Object.keys(userDetails).length;
	const renderUserDetailsSection = () => (
		<div>
			{isUserDetailsExist ? (
				<>
					<p style={{ fontWeight: 400 }}>{userDetails.name}</p>
					<p
						style={{ lineHeight: 1.6 }}
					>{`${userDetails.street}, ${userDetails.postCode} ${userDetails.city}, ${userDetails.country}`}</p>
					<Button
						className={classes.verifyPhoneNumberButton}
						style={!isEdit ? { display: "none" } : { display: "block" }}
						onClick={() => setOpenModal(true)}
					>
						Edit data
					</Button>
				</>
			) : (
				<p style={{ fontStyle: "italic" }}>No data</p>
			)}
		</div>
	);
	const handleSaveUserDetails = () => {};
	return (
		<Grid item className={classes.userDetailsContainer}>
			<ModalWindow
				bookingInfo={bookingInfo}
				setBookingData={setBookingData}
				userDetails={userDetails}
				dialogTitleText="User Details"
				modalWindowType="userDetails"
				goBackHandle={goBackHandle}
				submitHandle={submitHandle}
				isOpen={isModalOpened}
				handleDialogAction={handleDialogAction}
				handleSaveUserDetails={handleSaveUserDetails}
			/>
			<p className={classes.orderDetailsHeading}>User details</p>
			{isEdit && !isUserDetailsExist
				? renderVerifyUserPhone()
				: renderUserDetailsSection()}
		</Grid>
	);
};
export const RenderUserDetails = RenderFunction;
