import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useStyles } from '../../utilities/commons/Styles';
import { ListItem, ListItemIcon, ListItemText, Divider, List } from '@material-ui/core';
import { itemsList } from '../../utilities/screens/ScreenItems';
import SettleTheme from '../../utilities/components/SettleTheme';
import Portrait from '../../utilities/components/Portrait';


const DrawerContent = ({ isDrawerOpen, toggleDrawer }) => {
    const history = useHistory();
    const handleOnClick = (route) => {
        history.push(route);
        if (isDrawerOpen === true) {
            return toggleDrawer();
        }
    };
    return (
        <>                         
            <Portrait />
            <Divider />
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
            <SettleTheme/>
        </>
    );
};
export default DrawerContent;