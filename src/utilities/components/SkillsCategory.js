import React from 'react';
import { useStyles } from '../commons/Styles';
import { Box, Typography } from '@material-ui/core';
import SkillsCard from './SkillsCard'


const SkillsCategory = ({ name, list }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='subtitle2' component='h2' align='center' className={classes.skillTitle}>
                {name}
            </Typography>
            <Box display="flex" flexDirection="row" p={1} m={0.8} bgcolor="background.paper">
                {
                    list.map((item) => (
                        <SkillsCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            popUpTitle={item.popUpTitle}
                        />
                    ))
                }
            </Box>
        </>
    );
};
export default SkillsCategory;