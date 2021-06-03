import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import CssBaseline from '@material-ui/core/CssBaseline';
import StackScreens from './stack/StackScreens';
import DrawerNavigator from './drawer/DrawerNavigator';
import { useStyles } from '../utilities/commons/Styles';

// import Home from './main/Home';
// import About from './main/About';
// import Skills from './main/Skills';

const AppContainer = () => {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <DrawerNavigator />
                <main className={classes.content}>
                    <div className={classes.toolbar} />                   
                    <StackScreens />
                </main>
            </div>
        </Router>

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