import '../styles/globals.scss'
import SearchProvider from '@context/SearchContext'
import ThemeProvider from '@context/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SearchProvider>
  )
}

export default MyApp
