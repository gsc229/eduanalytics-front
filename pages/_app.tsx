import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SchoolsProvider } from '../src/store'
import { CssBaseline } from '@material-ui/core'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SchoolsProvider>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </SchoolsProvider>
  )
}

export default MyApp
