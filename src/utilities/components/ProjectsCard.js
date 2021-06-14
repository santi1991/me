import React from "react";
// import { styles } from '../../utilities/commons/Styles';
import { Box, Typography, Link, Grid, Avatar, Paper  } from '@material-ui/core';

const styles1 = {
    boxContainer: {
        width: 500,
        height: 90,
    }
}

const ProjectsCard = ({ title, subtitle = '', avatarLetter, avatarColor, description, linkTo, linkLabel }) => {
    return (

        <Grid item xs={6}>
            <Paper elevation={3} style={styles1.boxContainer}>

                <Typography variant='subtitle2' align='center' style={{fontWeight:'bold'}} >
                    {title}, {subtitle}
                </Typography>                
                
                <Box display='flex' flexDirection='row' p={0.2} m={0.2} >

                    <Avatar style={{backgroundColor: avatarColor, width:30, height:30 }}>{avatarLetter}</Avatar>

                    <Typography variant='caption'  align='center' style={{marginLeft:5, fontStyle:'italic'}}>
                        {description} 
                    </Typography>
                    

                </Box>   

                <Typography variant='caption' display="block" align='center' >
                <Link href={linkTo}  rel='noreferrer' target='_blank'>
                    {linkLabel}
                </Link>
                   
                </Typography>  

            </Paper>
        </Grid>

    );
};
export default ProjectsCard;

