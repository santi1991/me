import React, { useContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import StackScreens from './StackScreens';
import DrawerNavigator from './drawer/DrawerNavigator';
import { useStyles, ThemeProvider, createMuiTheme } from '../utilities/commons/Styles';
import { AppContext } from '../utilities/context/ContextProvider';

const AppContainer = () => {
    const { appState } = useContext(AppContext);
    const themeMode = appState.themeMode
    const theme = createMuiTheme({
        palette: {
            type: themeMode
        }
    });
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <DrawerNavigator />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <StackScreens />
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default AppContainer;

/*
 <StackScreens />
<ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/skills">Skills</Link>
    </li>
</ul>

<hr />
*/