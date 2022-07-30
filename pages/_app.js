import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../styles/globals.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Cormorant SC, serif'
  }
})





function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
 
}

export default MyApp
