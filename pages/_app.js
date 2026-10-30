import { Cormorant_SC } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

const headingFont = Cormorant_SC({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={headingFont.variable}>
      <Component {...pageProps} />
    </div>
  )
}
