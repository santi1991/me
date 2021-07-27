import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectsCard from '../ProjectsCard';

const EntryProjects = () => {
    return (
        <>
            <Grid item xs={12}> <h2>Entry-level Projects</h2></Grid>
           
            <Grid item xs={12} sm={6}>
                <ProjectsCard
                    title={'Sitio Web'}
                    subtitle={'Estudio de Arquitectura'}
                    avatarLetter={'A'}
                    avatarColor={'red'}
                    description={`Prototipo de sitio web para un estudio de arquitectura\n(uno de mis primeros proyectos)`}
                    madeWith='Bootstrap4'
                    linkTo={'https://santi1991.github.io/unoen25b4/'}
                    linkLabel={'Ver: https://santi1991.github.io/unoen25b4/'}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ProjectsCard
                    title={'Sitio Web'}
                    subtitle={'Gestión de Tareas'}
                    avatarLetter={'T'}
                    avatarColor={'blue'}
                    description={`Proyecto básico en donde podrás crear tus notas y tareas`}
                    madeWith='Python, Flask'
                    linkTo={'https://santi1991.pythonanywhere.com/'}
                    linkLabel={'Ver: https://santi1991.pythonanywhere.com/'}
                />
            </Grid>
        </>
    );
}
export default EntryProjects;
