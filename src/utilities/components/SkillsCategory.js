import React from 'react';
import { styles } from '../commons/Styles';
import { Box, Typography } from '@material-ui/core';
import SkillsCard from './SkillsCard'


const SkillsCategory = ({ name, list, fontSize }) => {
    return (
        <>
            <Typography variant='subtitle2' component='h2' align='center' style={styles.skillTitle}>
                {name}
            </Typography>
            <Box display='flex' flexDirection='row' p={1} m={1} bgcolor='background.paper'>
                {
                    list.map((item) => (
                        <div style={{ marginLeft: 3, marginRight: 3 }} key={item.id}>
                            <SkillsCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                popUpTitle={item.popUpTitle}
                                fontSize={fontSize}
                            />
                        </div>

                    ))
                }
            </Box>
        </>
    );
};
export default SkillsCategory;