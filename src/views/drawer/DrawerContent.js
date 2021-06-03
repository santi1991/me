import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../utilities/commons/Styles';

import { ListItem, ListItemIcon, ListItemText, Divider, List, Avatar } from '@material-ui/core';
import { itemsList } from '../../utilities/screens/ScreenItems';

// import { avatarImg } from '../../resources/img/Images';
import img from '../../resources/img/avatar.jpg';


const DrawerContent = ({ isDrawerOpen, toggleDrawer }) => {
    const classes = useStyles();
    const history = useHistory();
    const handleOnClick = (route) => {
        history.push(route);
        if (isDrawerOpen === true) {
            return toggleDrawer();
        }
    };
    return (
        <>
            <div className={classes.toolbar} />
            <Divider />
            <Avatar alt='Santiago' src={img} style={{height: 170, width: 170}} />
            <List>
                {
                    itemsList.map((item, index) => (
                        <ListItem button key={item.id} onClick={() => handleOnClick(item.route)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.screen} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
        </>
    );
};
export default DrawerContent;