import { createMuiTheme } from "@material-ui/core/styles";

const deepBlue = {
	500: "#3f70e2",
};
export default createMuiTheme({
	palette: {
		primary: deepBlue,
	},
	overrides: {
		MuiInput: {
			underline: {
				"&:hover:not($disabled):after": {
					borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
				},
				"&:hover:not($disabled):before": {
					borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
				},
				"&:after": {
					borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
				},
				"&:before": {
					borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
				},
			},
		},
		MuiFormLabel: {
			root: {
				"&$focused": {
					color: "rgba(0, 0, 0, 0.42)",
				},
			},
		},
	},
});
