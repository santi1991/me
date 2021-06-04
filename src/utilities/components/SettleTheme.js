import React, { useContext } from "react";
import Switch from '@material-ui/core/Switch';
import { AppContext } from '../context/ContextProvider';

import FormControlLabel from '@material-ui/core/FormControlLabel';

const SettleTheme = () => {

    const { appState, setAppState } = useContext(AppContext);
    const themeState = appState.themeMode === 'dark' ? true : false;

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
        <div>            
            <FormControlLabel
                value="start"
                control={
                    <Switch
                        checked={themeState}
                        onChange={toggleTheme}
                        name='dark'
                    />
                }
                label={themeState ? 'Dark Mode' : 'Light Mode'}
                labelPlacement='start'
            />
        </div>
    );
};
export default SettleTheme;