import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: 22
        }
    },
    palette: {
        primary: {
            main: orange[400],
        },
        secondary: {
            main: green[400],
        }
    }
});

export const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        marginBottom: 15,
        color: 'white',
        padding: '5px 30px'
    }
});