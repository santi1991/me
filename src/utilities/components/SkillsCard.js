import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const number = 65;

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: number, 
        width: number,
        borderRadius:80,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5,        
    },
    media: {
        height: number,
    },
});

const SkillsCard = ({ image, title, fontSize = 12, popUpTitle }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={0.3} direction='column' justify='center'>
            <Card className={classes.root}>
                <CardActionArea onClick={() => alert('hola')} style={{height: number, width: number}} >
                    <CardMedia
                        alt={title}
                        component='img'
                        height={number}
                        className={classes.media}
                        image={image}
                        title={popUpTitle ? popUpTitle : title}
                    />                               
                </CardActionArea>            
            </Card>
            <Typography  variant="subtitle2" component="h2" align='center' style={{fontSize: fontSize}}>
                {title}
            </Typography> 
        </Grid>
    );
};
export default SkillsCard;