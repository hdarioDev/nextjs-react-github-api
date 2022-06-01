import SearchProvider from '@context/SearchContext'
import ThemeProvider from '@context/ThemeContext'
import '../styles/globals.scss'

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
