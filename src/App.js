import React from 'react';
import './App.css';

import { theme } from './utilities/commons/Styles';

import { ThemeProvider } from '@material-ui/core/styles';
import AppContainer from './views/AppContainer';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
