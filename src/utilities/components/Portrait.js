import React from "react";
import { Avatar, Grid, Typography } from '@material-ui/core';
import img from '../../resources/img/avatar.jpg';
import '@fontsource/roboto';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({    
    title: {
        textAlign:'center',
        fontWeight:'bold'
    },
    subTitle: {
        textAlign:'center',
        fontStyle:'italic',
        fontSize:14
    },
    avatar: {
        height: 160, width: 160, marginTop: 20, marginBottom: 15
    }
}));


const Portrait = () => {
    const classes = useStyles();

    return (
        <Grid container justify = "center">
            
            <Avatar
                alt='Santiago'
                src={img}
                className={classes.avatar}
            />
        
            <Typography variant='body2' className={classes.title}>
                Santiago Marulanda Meza
            </Typography>
            <Typography className={classes.subTitle}>
                santi@gmail.com
            </Typography>
        </Grid >
    );
};
export default Portrait;

/*
<Grid container justify='flex-start' direction='column' alignItems='center'>
    <Grid item >
        <Avatar
            alt='Santiago'
            src={img}
            style={{ height: 160, width: 160, marginTop: 20, marginBottom: 15 }}
        />
    </Grid>
    <Grid item >
        <Typography variant='subtitle1'>
            Santiago Marulanda
        </Typography>

    </Grid>
    <Grid item >
        <Typography variant='subtitle2'>
            santi@gmail.com
        </Typography>

    </Grid>


</Grid>
*/