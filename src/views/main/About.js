import React from "react";
import { useStyles } from '../../utilities/commons/Styles';
import { useTranslation } from 'react-i18next';
import { Paper, Grid, Typography } from '@material-ui/core';
import EducationCard from '../../utilities/components/EducationCard'; 
import { imgUtp, imgCalasanz, imgGit, imgReact, imgEnglish, imgTIC } from '../../resources/img/Images'


const About = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <div className={classes.screenContainer}>

            <Grid container spacing={3} alignItems="center" justify='center' >

                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h2" align='center'>
                           {t('Hello World')}!
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" style={{ fontStyle: 'italic' }}>
                            {t('Description')}!...
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" style={{ fontStyle: 'italic' }}>
                            {'...'}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" style={{ fontStyle: 'italic' }}>
                            {t('Profile')}!.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <EducationCard
                        image={imgCalasanz}
                        title={t('High School Degree')}
                        description='Colegio Calasanz Pereira'
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <EducationCard
                        image={imgUtp}
                        title={t('Mechanical Engineer')}
                        description='Universidad Tecnológica de Pereira'
                    />
                </Grid>

                <Grid item xs={6} sm={3}>
                    <EducationCard
                        image={imgEnglish}
                        title={t('English Degree')}
                        description='Centro Colombo Americano'
                        contentHeight={110}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <EducationCard
                        image={imgReact}
                        title={t('Full Stack Degree')}
                        description='Hong Kong University of Science and Technology'
                        contentHeight={110}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <EducationCard
                        image={imgGit}
                        title={t('Git Degree')}
                        description='Platzi'
                        contentHeight={110}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <EducationCard
                        image={imgTIC}
                        title={t('TIC Degree')}
                        description='Misión TIC 2022 y Universidad de Antioquia'
                        contentHeight={110}
                    />
                </Grid>
            </Grid>
        </div>
    );
};
export default About;