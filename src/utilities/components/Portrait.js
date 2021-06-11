import React from "react";
import { styles } from "../commons/Styles";
import { Avatar, Grid, Typography } from '@material-ui/core';
import { AvatarImg } from "../../resources/img/Images";


const Portrait = () => {

    return (
        <Grid container justify = "center">
            <Avatar
                alt='Santiago'
                src={AvatarImg}
                style={styles.avatarContainer}
                // className={classes.avatarContainer} this does not work
            />
            <Typography 
                variant='body1' 
                component='span' 
                style={styles.avatarTitle}
            >
                Santiago Marulanda Meza
            </Typography>
            <Typography 
                variant='body2' 
                component='span' 
                style={styles.avatarSubtitle}
            >
                santiago.marulandam@gmail.com
            </Typography>
        </Grid >
    );
};
export default Portrait;