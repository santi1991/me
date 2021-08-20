import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectsCard from '../ProjectsCard';

const JuniorProjects = () => {
    return (
        <>
            <Grid item xs={12}> <h2>Junior Projects!</h2></Grid>
            <Grid item xs={12} sm={6}>
                <ProjectsCard
                    title={'Multi-Plataforma'}
                    subtitle={'Rastreador de Gastos'}
                    avatarLetter={'G'}
                    avatarColor={'pink'}
                    description={`Aplicación disponible para Web y Android, podrás guardar tus gastos y crear presupuestos.`}
                    madeWith='React Native'
                    linkTo={'https://santi1991.github.io/my-expenses/'}
                    linkLabel={'Ver: https://santi1991.github.io/my-expenses/'}
                />

            </Grid>
            <Grid item xs={12} sm={6}>
                <ProjectsCard
                    title={'Mobile App'}
                    subtitle={'Movies'}
                    avatarLetter={'M'}
                    avatarColor={'black'}
                    description={`Aplicación móvil, podrás buscar una gran cantidad de peliculas.`}
                    madeWith='React Native, Redux'
                    linkTo={'https://drive.google.com/file/d/1oC1Gin2fVfhrbws4Ywv-VSPV4o31WpKJ/view?usp=sharing'}
                    linkLabel={'Decarga la app (Android)'}
                />

            </Grid>
            <Grid item xs={12} sm={6}>
                <ProjectsCard
                    title={'Sitio Web'}
                    subtitle={'The Road to React Book'}
                    avatarLetter={'R'}
                    avatarColor={'green'}
                    description={`Proyecto realizado siguiendo la lectura del libro The Road to React`}
                    madeWith='React'
                    linkTo={'https://santi1991.github.io/road-react/'}
                    linkLabel={'Ver: https://santi1991.github.io/road-react/'}
                />
            </Grid>
        </>
    );
}
export default JuniorProjects;
