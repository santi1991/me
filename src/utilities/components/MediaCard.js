import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MediaCard = ({ image, title, subtitle = '', description, contentHeight = 80 }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    alt='img'
                    component="img"
                    height="140"
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent style={{height: contentHeight}}>
                    <Typography  variant="subtitle2" component="h2" align='center'>
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h2" align='center'>
                        {subtitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>            
        </Card>
    );
};
export default MediaCard;