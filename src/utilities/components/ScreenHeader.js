import React from "react";
import Divider from '@material-ui/core/Divider';

const ScreenHeader = ({ title = '' }) => {
    return (
        <div style={{margin: 12}} >
            <h1>{title}</h1>
            <Divider/>
        </div>
    );
};
export default ScreenHeader;
