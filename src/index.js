import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import "./index.css";
import "./App.css";
import muiTheme from "./styles/theme";
import MomentUtils from "@date-io/moment";
import LogInPage from "./components/LogInPage";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { IntroducingPage } from "./components/IntroducingPage/IntroducingPage";
import MainDashboard from "./components/Dashboard";
// addLocaleData([...enLocaleData]);
// import enLocaleData from "react-intl/locale-data/en";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const app = (
	<Router history={history}>
		<MuiThemeProvider theme={muiTheme}>
			<IntlProvider locale={"en"}>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Switch>
						<Route exact path="/" component={IntroducingPage} />
						<Route path="/login" component={LogInPage} />
						<Route path="/register" component={RegisterPage} />
						<Route path="/dashboard" component={MainDashboard} />
					</Switch>
				</MuiPickersUtilsProvider>
			</IntlProvider>
		</MuiThemeProvider>
	</Router>
);

ReactDOM.render(app, document.getElementById("root"));
