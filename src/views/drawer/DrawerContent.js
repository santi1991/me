import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { screensList } from '../../utilities/commons/ScreensList';
import { ListItem, ListItemIcon, ListItemText, Divider, List } from '@material-ui/core';
import SettleTheme from '../../utilities/components/SettleTheme';
import SettleLanguage from '../../utilities/components/SettleLanguage';
import Portrait from '../../utilities/components/Portrait';


const DrawerContent = ({ isDrawerOpen, toggleDrawer }) => {
    const { t } = useTranslation();
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
                    screensList.map((item, index) => (
                        <ListItem button key={item.id} onClick={() => handleOnClick(item.path)}> 
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={t(item.name)} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
            <SettleTheme/>
            <SettleLanguage/> 
        </>
    );
};
export default DrawerContent;