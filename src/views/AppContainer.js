import React, { useContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppScreens from './AppScreens';
import NavigationContainer from './NavigationContainer';
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
                    <NavigationContainer />
                    <main className={classes.content}>                        
                        <AppScreens />
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default AppContainer;
