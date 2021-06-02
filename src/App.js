import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto';

import { theme, useStyles } from './utilities/commons/Styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';

import { ThemeProvider } from '@material-ui/core/styles';

import { Grid, Container, Typography, Paper, Checkbox, FormControlLabel, Button, ButtonGroup } from '@material-ui/core';

// import { SaveIcon, DeleteIcon, MenuIcon  } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';


const ButtonStyled = () => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>Hola Mundo</Button>
  )
}

const CheckBoxComponent = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color='primary'
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        }
        label='Testing checkbox'
      />

    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <div className="App">
          <header className="App-header">

            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variant='h6'>
                  Hola a Todos
                </Typography>
                <Button>
                  Login
                </Button>

              </Toolbar>
            </AppBar>

            <Typography variant='h2'>
              Welcome to my App
            </Typography>
            <Typography variant='subtitle1'>
              Learn about myself
            </Typography>
            <ButtonStyled />

            <Grid container spacing={3} justify='center'>
              <Grid item xs={3} sm={4}>
                <Paper style={{height: 75, width:'100%'}} />
              </Grid>
              <Grid item xs={3} sm={4}>
                <Paper style={{height: 75, width:'100%'}} />
              </Grid>
              <Grid item xs={3} sm={4}>
                <Paper style={{height: 75, width:'100%'}} />
              </Grid>

            </Grid>
            

            <CheckBoxComponent />
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                //endIcon={<AddToPhotosIcon/>}
                //size='large'
                variant="contained"
                color='primary'
                onClick={() => alert('hola')}
              >
                Save
          </Button>
              <Button
                startIcon={<DeleteIcon />}
                variant="contained"
                color='secondary'
                onClick={() => alert('hola')}
              >
                Discard
          </Button>
            </ButtonGroup>


            <img src={logo} className="App-logo" alt="logo" />

          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
