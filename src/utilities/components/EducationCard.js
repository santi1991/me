import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const EducationCard = ({ image, title, subtitle = '', description, contentHeight = 80 }) => {

    return (
        <Card style={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => alert('hola')} >
                <CardMedia
                    alt={title}
                    component='img'
                    height='140'
                    style={{ height: 140 }}
                    image={image}
                    title={title}
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
export default EducationCard;