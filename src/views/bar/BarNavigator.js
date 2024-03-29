import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../../utilities/commons/Styles';

const BarNavigator = ({ toggleDrawer }) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar} color='transparent' style={{marginBottom:0}}>
            <Toolbar style={{minHeight: 44}} >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>                               
            </Toolbar>
        </AppBar>
    )
};
export default BarNavigator;