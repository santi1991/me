import React from "react";
import { styles } from '../../utilities/commons/Styles';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import OtherProjects from '../../utilities/components/projects/OtherProjects';
import JuniorProjects from '../../utilities/components/projects/JuniorProjects';
import EntryProjects from "../../utilities/components/projects/EntryProjects";
import ScreenHeader from "../../utilities/components/ScreenHeader";

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div style={styles.screenContainer}>

            <ScreenHeader title={t('Projects')}/>            

            <Grid container spacing={1}  direction='row'>
                <JuniorProjects />
                <EntryProjects />                
                <OtherProjects />
            </Grid>


            <h3>I will be indexing more projects Soon!</h3>


        </div>
    );
};
export default Projects;