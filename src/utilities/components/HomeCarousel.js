import React from "react";
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // required to render the slides correctly -> idk why - see the docs
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SchoolIcon from '@material-ui/icons/School'; 

import CarouselSlide from './CarouselSlide';



const HomeCarousel = () => {
    const history = useHistory();
    const { t } = useTranslation();

    return (
        <div >
            <Carousel
                dynamicHeight={true}
                stopOnHover={false}
                axis={'vertical'}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={4500}
                transitionTime={2000}
                width={500}
                //width={'35%'}
                //centerMode={true}
            >
                <div key='slide1' style={{ padding: 1, height: 160 }}>
                    <CarouselSlide 
                        title={`${t('Hello')}!`}
                        subtitle={`${t('I am')} Santiago...`}
                        onPress={() => history.push('/about')}
                        icon={<SystemUpdateAltIcon/>}
                        buttonLabel={t('About Me')}
                    />                    
                </div>
                <div key='slide2' style={{ padding: 1, height: 160  }}>

                    <CarouselSlide 
                        title={`...${t('I like to be')}`}
                        subtitle={`${t('Creative').toUpperCase()} !!`}
                        onPress={() => history.push('/projects')}
                        icon={<EmojiObjectsIcon/>}
                        buttonLabel={t('Projects').toUpperCase()}
                    />
                    
                </div>
                <div key='slide3' style={{ padding: 1, height: 160  }}>

                    <CarouselSlide 
                        title={t('I usually learn')}
                        subtitle={`${t('New things').toUpperCase()} !!`}
                        onPress={() => history.push('/skills')}
                        icon={<SchoolIcon/>}
                        buttonLabel={t('Skills').toUpperCase()}
                    />
                    
                </div>
            </Carousel>
        </div>
    );
};
export default HomeCarousel;
