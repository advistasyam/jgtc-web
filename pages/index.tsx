import "twin.macro"
import Head from "next/head"
// import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { VideoLanding } from "@components/Landing/VideoLanding"
import { PastLineUp } from "@components/Landing/PastLineUp"
// import { SponsorSection } from "@components/Landing/SponsorSection"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function Home() {
  const wrapperVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      x: 100,
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      x: 0,
    },
    initialBawah: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      x: -100,
    },
    animateBawah: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      x: 0,
    },
  }

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  })
  return (
    <>
      <Head>
        <title>JGTC Festival</title>
        <meta
          name="description"
          content="The biggest jazz festival held by student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <VideoLanding />

      {/* Kitabisa is outdated in 1/10/2022, changed with sponsor page */}
      {/* <Kitabisa /> */}

      {/* <SponsorSection /> */}

      <div tw="container mx-auto flex flex-col mt-40" ref={ref}>
        <motion.h1
          tw="text-center text-3xl md:text-6xl text-orangejeruk font-drukwide"
          initial={"initial"}
          animate={inView ? "animate" : "initial"}
          variants={wrapperVariants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          ABOUT US
        </motion.h1>
        <div tw="container mx-auto px-6 md:px-0 flex flex-col md:flex-row mt-12 mb-12 md:mb-0">
          <img src="/images/Footer/LOGO.png" alt="" tw="w-[350px]" />
          <div tw="flex items-center justify-start">
            <div tw="flex flex-col space-y-6 font-druk">
              <div tw="text-wheat text-xl tracking-widest text-justify">
                Jazz Goes To Campus (JGTC) is an annual international jazz
                festival held by Faculty of Economics and Business Universitas
                Indonesia students. JGTC has been running for more than four
                decades since it was first initiated in 1976 by Candra Darusman,
                making it as the oldest and the most celebrated jazz festival in
                Indonesia, with a simple yet brilliant vision that is “To Bring
                Jazz to Campus!”
              </div>
              <div tw="text-wheat text-xl tracking-widest text-justify">
                In its 44th year, JGTC carries the tagline of “Reminiscing The
                Good ol Jazz!” to create the vibe of Golden Era of Jazz back in
                the 1920s New Orleans.
              </div>
            </div>
          </div>
        </div>
      </div>

      <PastLineUp />

      <Footer />
    </>
  )
}
