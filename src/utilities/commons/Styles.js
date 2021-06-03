import { makeStyles, createMuiTheme, useTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[400],
        },
        secondary: {
            main: green[400],
        }
    }
});

const drawerWidth = 240;

// export const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },    
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
// }));
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    //avatar    
    large: {
        width: 170,
        height: 170,
    },
}));

export { useStyles, theme, useTheme };

/*
specialButton: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        marginBottom: 15,
        color: 'white',
        padding: '5px 30px'
    },
*/