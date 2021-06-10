import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { useStyles } from '../../utilities/commons/Styles';
import { ListItem, ListItemIcon, ListItemText, Divider, List } from '@material-ui/core';
import SettleTheme from '../../utilities/components/SettleTheme';
import SettleLanguage from '../../utilities/components/SettleLanguage';
import Portrait from '../../utilities/components/Portrait';

import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import FaceIcon from '@material-ui/icons/Face';


const DrawerContent = ({ isDrawerOpen, toggleDrawer }) => {
    const { t } = useTranslation();
    const history = useHistory();
    const handleOnClick = (route) => {
        history.push(route);
        if (isDrawerOpen === true) {
            return toggleDrawer();
        }
    };

    const itemsList = [
        {
            id: 0,
            screen: t('Home'),
            icon: <HomeIcon />,
            route: '/me'
        },
        {
            id: 1,
            screen: t('About Me'),
            icon: <FaceIcon />,
            route: '/about'
        },
        {
            id: 2,
            screen: t('Skills'),
            icon: <MenuBookIcon />,
            route: '/skills'
        },
        {
            id: 3,
            screen: t('Projects'),
            icon: <LocalMallIcon />,
            route: '/projects'
        }
    ];

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
            <SettleLanguage/>
        </>
    );
};
export default DrawerContent;