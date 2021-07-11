import React from 'react'
import Head from 'next/head'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SchoolsProvider } from '../src/store'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../src/theme'


function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: HTMLElement | null = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);


  return (
    <React.Fragment>
      <SchoolsProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SchoolsProvider>
    </React.Fragment>
  )
}

export default MyApp
