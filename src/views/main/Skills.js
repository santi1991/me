import React from "react";
import { useTranslation } from 'react-i18next';
import { useStyles } from '../../utilities/commons/Styles';
import Grid from '@material-ui/core/Grid';
import * as List from '../../utilities/commons/SkillsList';
import SkillsCategory from  '../../utilities/components/SkillsCategory';
                                                        
const Skills = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <div className={classes.screenContainer}>
            <Grid container spacing={2} direction='row'>

                <Grid container item xs={12} sm={6} spacing={3}>
                    <SkillsCategory 
                        name={t('Core')}
                        list={List.core}
                    />                    
                </Grid>

                <Grid container item xs={12} sm={6} spacing={3}>
                    <SkillsCategory 
                        name={t('Tools')}
                        list={List.tools}
                    />                      
                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <SkillsCategory 
                        name={'Front-end'}
                        list={List.frontend}
                    />                    
                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <SkillsCategory 
                        name={'Back-end'}
                        list={List.backend}
                    />                       
                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <SkillsCategory 
                        name={t('Database')}
                        list={List.database}
                    />                       
                </Grid>

                <Grid container item xs={12} spacing={3}>
                    <SkillsCategory 
                        name={t('Server')}
                        list={List.server}
                    />                      
                </Grid>

            </Grid>
        </div>
    );
};
export default Skills;

/*
<div className={classes.toolbar} />
*/