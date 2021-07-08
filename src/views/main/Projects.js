import React from "react";
import { styles } from '../../utilities/commons/Styles';
import ProjectsCard from '../../utilities/components/ProjectsCard';
import Grid from '@material-ui/core/Grid';


const Projects = () => {
    return (
        <div style={styles.screenContainer}>            
            <h1>Projects!</h1>
            <Grid 
                container 
                spacing={2}
                direction='column'
                justify='center'
                alignItems='flex-start'
            >
                <ProjectsCard
                    title={'Ingeniero Mecánico'}
                    subtitle={'Trabajo de Grado'}
                    avatarLetter={'M'}
                    avatarColor={'purple'}
                    description={`Evaluación energética de un deshidratador solar tipo túnel para frutas\n(nada que ver con programación)`}
                    linkTo={'https://revistas.uis.edu.co/index.php/revistauisingenierias/article/view/11288'}
                    linkLabel={'Publicado en: Revista UIS Ingenierias'}
                />

                <ProjectsCard
                    title={'Sitio Web'}
                    subtitle={'Estudio de Arquitectura'}
                    avatarLetter={'A'}
                    avatarColor={'red'}
                    description={`Prototipo de sitio web hecho con Bootstrap4\n(uno de mis primeros proyectos)`}
                    linkTo={'https://santi1991.github.io/unoen25b4/'}
                    linkLabel={'Ver: https://santi1991.github.io/unoen25b4/'}
                />     

                <ProjectsCard
                    title={'Sitio Web'}
                    subtitle={'Gestión de Tareas'}
                    avatarLetter={'T'}
                    avatarColor={'blue'}
                    description={`Proyecto básico de sitio web hecho con Python y Flask`}
                    linkTo={'https://santi1991.pythonanywhere.com/'}
                    linkLabel={'Ver: https://santi1991.pythonanywhere.com/'}
                />
                <ProjectsCard
                    title={'Sitio Web'}
                    subtitle={'The Road to React Book'}
                    avatarLetter={'R'}
                    avatarColor={'green'}
                    description={`Proyecto realizado siguiendo la lectura del libro The Road to React`}
                    linkTo={'https://santi1991.github.io/road-react/'}
                    linkLabel={'Ver: https://santi1991.github.io/road-react/'}
                />                                                             
            </Grid>
            <h2>I will be indexing more projects Soon!</h2>
            
            
        </div>
    );
};
export default Projects;

