import React from "react";
import { useStyles } from '../../utilities/commons/Styles';

const Skills = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar} />
            <h1>This is the Skills page</h1>
        </div>
    );
};
export default Skills;

