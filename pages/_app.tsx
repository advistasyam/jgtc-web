import { GlobalStyles } from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@components/Navbar"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import Script from "next/script"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  const { pathname } = useRouter()
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZTM44PS7D7`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-ZTM44PS7D7');
        `}
      </Script>
      <GlobalStyles />
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          key={pathname}
          tw="overflow-x-hidden"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </>
  )
}
export default MyApp
