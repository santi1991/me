import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import MeImg from '../../resources/img/me.png';

import HomeCarousel from '../../utilities/components/HomeCarousel';


const Home = () => {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${MeImg})`,
            height: 890,
        },
        carouselPosition: {
            marginTop: 180,
            marginLeft: 60,   
            position:'absolute'
        }
    }

    return (
        <div style={styles.paperContainer}>
            <div style={styles.carouselPosition}>
                <HomeCarousel/>
            </div>
        </div>
    );
};
export default Home;

/*
<Button variant='outlined' style={{marginTop:60, marginLeft:60}}>Default</Button>
<div>
            <Card style={styles.card}>
                <CardMedia image={MeImg} style={styles.media} />
                <div style={styles.overlay}>
                    this text should overlay the image
                </div>
            </Card>
        </div>
*/