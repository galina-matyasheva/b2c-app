import React, { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
export const PhoneField = ({
	countryDataCallback = () => {},
	setPhoneValidation = () => {},
	phoneNumberValue = null,
	isValid = true,
	disableDropdown = false,
	isEdit,
}) => {
	const [countryData, setCountryData] = useState({});
	const handleOnChange = (value, countryData) => {
		setCountryData({
			locale: countryData.countryCode,
			countryCode: `+${countryData.dialCode}`,
			phoneNumber: value,
		});
		setPhoneValidation({
			value: value.replace(/[\s()-\s]/g, ""),
			isValid: !(value.length !== 0 && value.replace(/\s/g, "").length < 10),
		});
	};
	const handleOnBlur = (event, value) => {
		countryDataCallback(countryData);
		setPhoneValidation({
			value: event.target.value.replace(/[\s()-\s]/g, ""),
			isValid: !(
				event.target.value.length !== 0 &&
				event.target.value.replace(/\s/g, "").length < 10
			),
		});
	};

	return (
		<MuiPhoneNumber
			disableDropdown={disableDropdown}
			onBlur={handleOnBlur}
			value={phoneNumberValue}
			error={!isValid}
			defaultCountry={"de"}
			onChange={handleOnChange}
			variant="outlined"
			regions={"europe"}
			FormHelperTextProps={{
				error: !isValid,
			}}
			fullWidth
		/>
	);
};
