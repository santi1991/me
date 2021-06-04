import React from 'react';
import './App.css';
import AppContainer from './views/AppContainer';
import { ContextProvider } from './utilities/context/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <AppContainer />
    </ContextProvider>
  );
}

export default App;
