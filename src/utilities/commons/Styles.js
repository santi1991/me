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
    //------  about   --------------
    screenContainer: {
        marginTop: 55,
        marginLeft: 15,
        marginRight:15,
        flexGrow: 1,        
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperSkills: {
        flexDirection:'row',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    //------  skills  ------------
    skillTitle: {
        marginTop:42, 
        marginRight:5, 
        marginLeft:5,
        width:70,
        fontWeight:'bold',
        letterSpacing:1,        
    },    
}));

const styles = {
    // ----- Avatar Portrait --------
    avatarContainer: {
        height: 150, 
        width: 150, 
        marginTop: 10, 
        marginBottom: 10,        
    },
    avatarTitle: {
        textAlign:'center',
        fontWeight:'bold',
    },
    avatarSubtitle: {
        textAlign:'center',
        fontStyle:'italic', 
        fontSize:14,
        marginBottom: 15
    },
    // ------ SLIDES Carousel -------------------
    slideTitle: {
        textAlign:'left',
        fontWeight:'bold',
        color: 'black',
        letterSpacing: 1,
        fontSize:30
        
    },
    slideSubtitle: {
        textAlign:'left',
        fontWeight:'bold',
        color: 'black',
        letterSpacing: 1,
        //fontStyle:'italic',
        fontSize:45,
    },
};

export { useStyles, useTheme, ThemeProvider, createMuiTheme, styles };

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