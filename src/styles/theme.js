import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    defaultFont: {
        fontFamily: '"Lato", sans-serif',
    },
    palette: {
        primary: {
            main: '#28cc8b',
            textColor: '#282d32',
            buttonTextColor: '#ffffff'
        },
        sideBar: {
            backgroundColor: '#162E44'
        },
        gray: {
            main: 'gray',
        },
        error: {
            main: "#f44336",
        }
    },
})
