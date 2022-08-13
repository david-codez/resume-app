import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import '../styles/globals.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Cormorant SC, serif'
  },
  palette: {
    mode: 'dark',
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '8rem'
      }
    }
  }
})





function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
 
}

export default MyApp
