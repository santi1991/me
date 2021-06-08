import React from "react";
import { useStyles } from '../../utilities/commons/Styles';

const Projects = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar} />
            <h1>This is the Projects page</h1>
        </div>
    );
};
export default Projects;

