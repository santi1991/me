import React from "react";
import { styles } from "../commons/Styles";
import { Button, Typography } from '@material-ui/core';

const CarouselSlide = ({ title, subtitle, onPress, icon, buttonLabel }) => {
 
    return (
        <>
            <Typography 
                variant='h4' 
                style={styles.slideTitle} 
            >
                {title}
            </Typography>
            <Typography 
                variant='h4' 
                style={styles.slideSubtitle} 
            >
                {subtitle}
            </Typography>

            <Button
                onClick={onPress}
                variant='contained'
                color='default'
                endIcon={icon}
                style={{ marginRight: 200, marginTop: 10 }}
                size="small"
            >
                {buttonLabel}
            </Button>
        </>
    );
};
export default CarouselSlide;