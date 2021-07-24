import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectsCard from '../ProjectsCard';

const OtherProjects = () => {
    return (
        <React.Fragment>
            <Grid item xs={12} sm={6}>
                <ProjectsCard
                    title={'Ingeniero Mecánico'}
                    subtitle={'Trabajo de Grado'}
                    avatarLetter={'M'}
                    avatarColor={'purple'}
                    description={`Evaluación energética de un deshidratador solar tipo túnel para frutas\n(nada que ver con programación)`}
                    madeWith='Transferencia de Calor'
                    linkTo={'https://revistas.uis.edu.co/index.php/revistauisingenierias/article/view/11288'}
                    linkLabel={'Publicado en: Revista UIS Ingenierias'}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <></>
            </Grid>
        </React.Fragment>
    );
}
export default OtherProjects;
