import React from "react";
import { MeImg } from '../../resources/img/Images';
import HomeCarousel from '../../utilities/components/HomeCarousel';

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


const Home = () => {
    return (
        <div style={styles.paperContainer}>
            <div style={styles.carouselPosition}>
                <HomeCarousel/>
            </div>
        </div>
    );
};
export default Home;