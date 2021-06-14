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
            </Grid>
            <h2>I will be indexing more Soon!</h2>
            
            
        </div>
    );
};
export default Projects;

