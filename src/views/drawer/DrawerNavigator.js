import React, { useState } from 'react';
import { Drawer, Hidden } from '@material-ui/core';
import { useStyles, useTheme } from '../../utilities/commons/Styles';
import DrawerContent from './DrawerContent';
import BarNavigator from '../bar/BarNavigator';

const DrawerNavigator = (props) => {

    const { window } = props;

    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <BarNavigator toggleDrawer={handleDrawerToggle} />

            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <DrawerContent isDrawerOpen={mobileOpen} toggleDrawer={handleDrawerToggle}/>
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <DrawerContent isDrawerOpen={mobileOpen} toggleDrawer={handleDrawerToggle}/>
                    </Drawer>
                </Hidden>
            </nav>
        </>
    );
};
export default DrawerNavigator;

/*
<Divider />
<List>
    {
        itemsList.map((item, index) => (
            <ListItem button key={item.id} onClick={() => history.push(item.route)} >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.screen} />
            </ListItem>
        ))
    }
</List>
<Divider />

*/

/*
<Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{ paper: classes.drawerPaper }}
    anchor="left"
>
    <RenderItemsList/>
</Drawer>

*/