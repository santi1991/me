import React from "react";
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography, Link } from '@material-ui/core';

const CurriculumVitae = () => {
 
    const { t } = useTranslation();
    
    const englishLink = 'https://drive.google.com/file/d/16-k9gXROeIc5iRjbShvMx2mOsKhcG82q/view?usp=sharing';
    const spanishLink =  'https://drive.google.com/file/d/1sPBNydROcDsBiQyL-I7H1deQK8j0F4i6/view?usp=sharing';

    return (
        <Grid container spacing={2} direction='row' justify='center' alignItems='center'>

            <Typography 
            style={{fontWeight:'bold'}}
                variant='body2'            
            >
                {t('Curriculum Vitae')}
            </Typography>

            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">

                <Typography variant='caption' display="block"  style={{marginRight:8}}>
                    <Link href={spanishLink} rel='noreferrer' target='_blank' color='inherit' variant='body2'>
                        Español
                    </Link>
                </Typography>

                <Typography variant='caption' display="block"  >
                    <Link href={englishLink} rel='noreferrer' target='_blank' color='inherit' variant='body2'>
                        English
                    </Link>
                </Typography>

            </Box>
        </Grid>
    );
};
export default CurriculumVitae;
