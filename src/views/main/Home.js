import React from "react";
import { MeImg} from '../../resources/img/Images';
import HomeCarousel from '../../utilities/components/HomeCarousel';
import { useWindowSize } from "../../utilities/commons/CustomHooks";

const styles = {
    paperContainer: {
        backgroundImage: `url(${MeImg})`,
        height: 800,
        width: 1200,
    },
    carouselPosition: {
        marginTop: 180,
        marginLeft: 60,   
        position:'absolute'
    }
}


const Home = () => {

    const { height, width } = useWindowSize();
    
    return (
        <div style={{...styles.paperContainer, height: height, width: width}}>
            <div style={styles.carouselPosition}>
                <HomeCarousel/>
            </div>
        </div>
    );
};
export default Home;