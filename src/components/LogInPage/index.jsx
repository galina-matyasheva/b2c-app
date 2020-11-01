import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { LogInPage } from "./LogInPage";

export default (withStyles(styles, { withTheme: true })(LogInPage));
