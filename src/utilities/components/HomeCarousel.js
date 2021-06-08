import React from "react";
//import { useStyles } from '../../utilities/commons/Styles';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import { Button, Typography } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles({
    title: {
        textAlign:'left',
        fontWeight:'bold',
        color: 'black',
        letterSpacing: 1,
        fontSize:30
        
    },
    subTitle: {
        textAlign:'left',
        fontWeight:'bold',
        color: 'black',
        letterSpacing: 1,
        //fontStyle:'italic',
        fontSize:45
    },
});


const HomeCarousel = () => {
    const history = useHistory();
    const classes = useStyles();

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
                <div key="slide1" style={{ padding: 1, height: 160 }}>
                    <Typography variant='h4' className={classes.title}>
                        Hola !
                    </Typography>
                    <Typography variant='h4' className={classes.subTitle}>
                        Soy Santiago...
                    </Typography>
                    
                    <Button 
                        onClick={() => history.push('/about')}
                        variant='contained'
                        color='default'
                        endIcon={<SystemUpdateAltIcon/>}
                        style={{marginRight:200, marginTop:10}}
                        size="small"
                    >
                        SOBRE MI
                    </Button>
                </div>
                <div key="slide2" style={{ padding: 1, height: 160  }}>
                    <Typography variant='h5' className={classes.title}>
                        Me gusta ser
                    </Typography>
                    <Typography variant='h4' className={classes.subTitle}>
                        CREATIVO !!
                    </Typography>
                    
                    <Button 
                        onClick={() => history.push('/projects')}
                        variant='contained'
                        color='default'
                        endIcon={<EmojiObjectsIcon/>}
                        style={{marginRight:200, marginTop:10}}
                        size="small"
                    >
                        PROYECTOS
                    </Button>
                </div>
                <div key="slide3" style={{ padding: 1, height: 160  }}>
                    <Typography variant='h5' className={classes.title}>
                        Usualmente aprendo cosas
                    </Typography>
                    <Typography variant='h4' className={classes.subTitle}>
                        NUEVAS !!
                    </Typography>
                    
                    <Button 
                        onClick={() => history.push('/skills')}
                        variant='contained'
                        color='default'
                        endIcon={<SchoolIcon/>}
                        style={{marginRight:200, marginTop:10}}
                        size="small"
                    >
                        HABILIDADES
                    </Button>
                </div>

            </Carousel>

        </div>
    );
};
export default HomeCarousel;

/*
<h1>Hola!</h1>
                    <h2>Soy Santiago</h2>
<div>
                    <img alt='1' src={MeImg} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='2' src={MeImg} />
                    <p className="legend">Legend 2</p>
                </div>

                 const carouselItems = [
        {
            title: 'Hola!',
            subTitle: 'Soy Santiago...',
            buttonIcon: <SystemUpdateAltIcon/>,
            buttonLabel: 'Ver CV'
        },
        {
            title: 'Me gusta ser',
            subTitle: 'CREATIVO !!',
            buttonIcon: <EmojiObjectsIcon/>,
            buttonLabel: 'Ver CV'
        }
    ]
*/