import React from 'react';
// import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
// import SettingsIcon from '@material-ui/icons/Settings';

import { useStyles } from '../../utilities/commons/Styles';

const BarNavigator = ({ toggleDrawer }) => {

    // const history = useHistory();
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
}
export default BarNavigator;

/*
<Typography variant="h6" noWrap style={{marginLeft: 200}}>
                    Responsive drawer
                </Typography>
                 <IconButton
                    color="inherit"                    
                    edge='end'
                    onClick={() => history.push('/settings')}
                    style={{marginLeft:'82%', marginRight: '5%'}}
                >
                    <SettingsIcon />
                </IconButton>

*/