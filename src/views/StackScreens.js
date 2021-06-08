import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './main/Home';
import About from './main/About';
import Skills from './main/Skills';
import Settings from './main/Settings'
import Projects from './main/Projects'


const StackScreens = () => {
    return (
        <>
            {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
            */}
            <Switch>
                <Route exact path='/me'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/skills'>
                    <Skills />
                </Route>
                <Route exact path='/settings'>
                    <Settings />
                </Route>
                <Route exact path='/projects'>
                    <Projects />
                </Route>
            </Switch>
        </>
    )
};
export default StackScreens;