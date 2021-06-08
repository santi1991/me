import { makeStyles, createMuiTheme, useTheme, ThemeProvider } from '@material-ui/core/styles';
// import { orange, green } from '@material-ui/core/colors';

const drawerWidth = 260;

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
        padding: theme.spacing(0.1),
    },
    //avatar    
    large: {
        width: 170,
        height: 170,
    },
    //-------
    //----about--------------
    screenContainer: {
        marginTop: 50,
        marginLeft: 15,
        marginRight:15,
        flexGrow: 1,        
    },
    paper: {
        //padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export { useStyles, useTheme, ThemeProvider, createMuiTheme };

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

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: orange[400],
//         },
//         secondary: {
//             main: green[400],
//         }
//     }
// });