import React from "react";
import { Switch, Route } from "react-router-dom";
import { screensList } from "../utilities/commons/ScreensList";

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
                {
                    screensList.map((item) => (
                        <Route exact path={item.path} key={item.id}>
                            {item.component}
                        </Route>
                    ))
                }                
            </Switch>
        </>
    )
};
export default StackScreens;