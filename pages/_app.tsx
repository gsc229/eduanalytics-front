import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SchoolsProvider } from '../src/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SchoolsProvider>
      <Component {...pageProps} />
    </SchoolsProvider>
  )
}

export default MyApp
