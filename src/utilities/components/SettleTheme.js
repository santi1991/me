import React, { useContext } from "react";
import Switch from '@material-ui/core/Switch';
import { AppContext } from '../context/ContextProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

const SettleTheme = () => {

    const { appState, setAppState } = useContext(AppContext);
    const themeState = appState.themeMode === 'dark' ? true : false;

    const topValue = 8;

    const toggleTheme = (event) => {
        // console.log(event.target.name); // 'dark' -> its the -name- props passed to the Switch component
        // console.log(event.target.checked); // true or false
        if (event.target.checked === true) {
            setAppState({ type: 'themeMode', payload: 'dark' });
        }
        else if (event.target.checked === false) {
            setAppState({ type: 'themeMode', payload: 'light' });
        }
    };

    return (
        <Grid container spacing={2} direction='row' justify='center' alignItems='center'>

            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                {
                    themeState === false ? (
                        <WbSunnyIcon style={{ marginTop: topValue }} />
                    ) : (
                        <WbSunnyOutlinedIcon style={{ marginTop: topValue }} />
                    )
                }
                <FormControlLabel
                    style={{ margin: 2 }}
                    value='start'
                    control={
                        <Switch
                            checked={themeState}
                            onChange={toggleTheme}
                            name='dark'
                        />
                    }
                    //label={themeState ? 'Dark Mode' : 'Light Mode'}
                    // label={'Modo'}
                    // labelPlacement='top'
                />
                {
                    themeState === true ? (
                        <Brightness2Icon style={{ marginTop: topValue }} />
                    ) : (
                        <Brightness2OutlinedIcon style={{ marginTop: topValue }} />
                    )
                }
            </Box>
        </Grid>
    );
};
export default SettleTheme;
