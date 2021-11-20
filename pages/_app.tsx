import { GlobalStyles } from 'twin.macro'
import type { AppProps } from 'next/app'
import Script from "next/script"
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script 
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZTM44PS7D7`}
      />
      <Script
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-ZTM44PS7D7');
        `}
      </Script>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
    
  )
}
export default MyApp
