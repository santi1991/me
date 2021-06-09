import React from "react";
import { useStyles } from '../../utilities/commons/Styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import MediaCard from '../../utilities/components/MediaCard';

import logoUtp from '../../resources/img/logoUTP.jpg';
import logoCalasanz from '../../resources/img/logoCalasanz.jpg';
import logoGit from '../../resources/img/logoGit.jpg';
import logoReact from '../../resources/img/logoReact.jpg';
import logoEnglish from '../../resources/img/logoEnglish.jpg';
import logoTIC from '../../resources/img/logoTIC.jpg';

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.screenContainer}>

            <Grid container spacing={3} alignItems="center" justify='center' >

                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2" align='center'>
                            Hola, Mundo!
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" style={{ fontStyle: 'italic' }}>
                            Soy un ingeniero mecánico amante de la naturaleza, inspirado cada día por la exploración espacial, y apasionado por las nuevas tecnologías!...
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" style={{ fontStyle: 'italic' }}>
                            {'...'}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" style={{ fontStyle: 'italic' }}>
                            En mi camino como programador, me gusta construir aplicaciones mobiles, ser creativo y simple durante el proceso de creación!.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <MediaCard
                        image={logoCalasanz}
                        title='Colegio Calasanz Pereira'
                        description='Bachiller Académico'
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <MediaCard
                        image={logoUtp}
                        title='Universidad Tecnológica de Pereira'
                        description='Ingeniero Mecánico'
                    />
                </Grid>

                <Grid item xs={6} sm={3}>
                    <MediaCard
                        image={logoEnglish}
                        title='Academic Knowledge in English level B2'
                        description='Centro Colombo Americano'
                        contentHeight={110}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <MediaCard
                        image={logoReact}
                        title='Full-Stack Web Development with React'
                        description='Hong Kong University of Science and Technology'
                        contentHeight={110}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <MediaCard
                        image={logoGit}
                        title='Curso Profesional de Git y Github'
                        description='Platzi'
                        contentHeight={110}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <MediaCard
                        image={logoTIC}
                        title='Programación y Desarrollo de Aplicaciones'
                        description='Misión TIC 2022 y Universidad de Antioquia'
                        contentHeight={110}
                    />
                </Grid>
            </Grid>
        </div>
    );
};
export default About;