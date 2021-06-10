import React from "react";
import { useTranslation } from 'react-i18next';
import { useStyles } from '../../utilities/commons/Styles';
import { Grid, Box, Typography } from '@material-ui/core';
import SkillsCard from '../../utilities/components/SkillsCard';
import * as L from '../../resources/img/Images';

const Skills = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const boxMargin = 0.8;
    return (
        <div className={classes.screenContainer}>

            <Grid container spacing={2} direction='row'>

                <Grid container item xs={12} sm={6} spacing={3}>
                    <Typography variant='subtitle2' component='h2' align='center' className={classes.skillTitle}>
                        {t('Core')}
                    </Typography>

                    <Box display="flex" flexDirection="row" p={1} m={boxMargin} bgcolor="background.paper">
                        <SkillsCard
                            image={L.logoHTML}
                            title='HTML'
                        />
                        <SkillsCard
                            image={L.logoCSS}
                            title='CSS'
                        />
                        <SkillsCard
                            image={L.logoBootstrap}
                            title='Bootstrap'
                        />
                        <SkillsCard
                            image={L.logoJS}
                            title='JavaScript'
                        />
                    </Box>

                </Grid>

                <Grid container item xs={12} sm={6} spacing={3}>
                    <Typography variant='subtitle2' component='h2' align='center' className={classes.skillTitle}>
                        {t('Tools')}
                    </Typography>

                    <Box display="flex" flexDirection="row" p={1} m={boxMargin} bgcolor="background.paper">
                        <SkillsCard
                            image={L.logoVisualStudio}
                            title='Visual Studio'
                            popUpTitle='Visual Studio Code'
                        />
                        <SkillsCard
                            image={L.logoGithub}
                            title='Github'
                        />
                        <SkillsCard
                            image={L.logoSlack}
                            title='Slack'
                        />
                        <SkillsCard
                            image={L.logoClickup}
                            title='ClickUp'
                        />
                    </Box>

                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <Typography variant='subtitle2' component='h2' align='center' className={classes.skillTitle}>
                        Front-end
                    </Typography>

                    <Box display="flex" flexDirection="row" p={1} m={boxMargin} bgcolor="background.paper">
                        <SkillsCard
                            image={L.logoReact}
                            title='ReactJS'
                        />
                        <SkillsCard
                            image={L.logoReactNative}
                            title='React Native'
                        />

                        <div style={{ height: 90, width: 2, backgroundColor: 'black', marginLeft: 10, marginRight: 10 }}>
                        </div>

                        <SkillsCard
                            image={L.logoReactNavigation}
                            title='R. Navigation'
                            popUpTitle='React Navigation'
                        />
                        <SkillsCard
                            image={L.logoExpo}
                            title='Expo'
                        />
                        <SkillsCard
                            image={L.logoRNFirebase}
                            title='RN. Firebase'
                            popUpTitle='React Native Firebase'
                        />
                    </Box>
                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <Typography variant='subtitle2' component='h2' align='center' className={classes.skillTitle}>
                        Back-end
                    </Typography>

                    <Box display='flex' flexDirection="row" p={1} m={boxMargin} bgcolor="background.paper">
                        <SkillsCard
                            image={L.logoNodeJS}
                            title='NodeJS'
                        />
                        <SkillsCard
                            image={L.logoKnex}
                            title='KnexJS'
                        />
                        <SkillsCard
                            image={L.logoPython}
                            title='Python'
                        />
                    </Box>

                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <Typography variant="subtitle2" component="h2" align='center' className={classes.skillTitle}>
                        {t('Database')}
                    </Typography>
                    <Box display="flex" flexDirection="row" p={1} m={boxMargin} bgcolor="background.paper">        
                        <SkillsCard
                            image={L.logoPostgreSQL}
                            title='PostgreSQL'
                        />
                    </Box>
                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <Typography variant='subtitle2' component='h2' align='center' className={classes.skillTitle}>
                        {t('Server')}
                    </Typography>

                    <Box display="flex" flexDirection="row" p={1} m={boxMargin} bgcolor="background.paper">
                        <SkillsCard
                            image={L.logoGCP}
                            title='Google Cloud'
                            popUpTitle='Google Cloud Platform'                            
                        />
                        <SkillsCard
                            image={L.logoFirebase}
                            title='Firebase'
                            popUpTitle='Google Firebase'
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
export default Skills;

/*
<div className={classes.toolbar} />
*/