import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './components/Routing';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

import {Fetch} from './types/api/patient';


const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {


  Fetch();

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter >
        <Routing />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
