import '@mantine/core/styles.css';
import { createTheme,MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
  /** Your theme override here */
})

//import { Router } from './Router';
//import { theme } from './theme';

function App() {

  return (
    //<MantineProvider theme={theme}>
    <MantineProvider theme={theme} >
          <h1>PROYECTO REACT SORTEOS</h1>
    </MantineProvider>
  )
}

export default App
