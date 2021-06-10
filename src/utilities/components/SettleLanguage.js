import React, { useContext } from "react";
import Switch from '@material-ui/core/Switch';
import { AppContext } from '../context/ContextProvider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SettleLanguage = () => {

    const { appState, setAppState } = useContext(AppContext);
    const espLanguage = appState.language === 'es' ? true : false;

    const topValue = 10;

    const toggleLanguage = (event) => {
        // console.log(event.target.name); // 'dark' -> its the -name- props passed to the Switch component
        // console.log(event.target.checked); // true or false
        if (event.target.checked === true) {
            setAppState({ type: 'language', payload: 'en' });
        }
        else if (event.target.checked === false) {
            setAppState({ type: 'language', payload: 'es' });
        }
    };

    return (
        <Grid container spacing={2} direction='row' justify='center' alignItems='center'>

            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">

                <Typography  
                    variant="subtitle2" 
                    component="h2" 
                    align='center' 
                    style={{
                        letterSpacing:1,
                        marginTop: topValue,
                        fontWeight: espLanguage ? 'bold' : 'normal',
                        fontSize: espLanguage ? 16 : 14,
                    }}
                >
                    ESP
                </Typography> 

                <FormControlLabel
                    style={{ margin: 2 }}
                    value='start'
                    control={
                        <Switch
                            checked={espLanguage ? false : true}
                            onChange={toggleLanguage}
                            name='en'
                        />
                    }                    
                />
                <Typography  
                    variant="subtitle2" 
                    component="h2" 
                    align='center' 
                    style={{
                        letterSpacing:1,
                        marginTop: topValue, 
                        fontWeight: espLanguage ? 'normal' : 'bold',
                        fontSize: espLanguage ? 14 : 16,
                    }}
                >
                    ENG
                </Typography> 
            </Box>
        </Grid>
    );
};
export default SettleLanguage;
