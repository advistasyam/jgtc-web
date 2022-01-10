import "twin.macro"
import Head from "next/head"
import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { VideoLanding } from "@components/Landing/VideoLanding"
import { PastLineUp } from "@components/Landing/PastLineUp"
import { SponsorSection } from "@components/Landing/SponsorSection"

export default function Home() {
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

      <Navbar />

      <VideoLanding />

      {/* Kitabisa is outdated in 1/10/2022, changed with sponsor page */}
      {/* <Kitabisa /> */}

      <SponsorSection />

      <PastLineUp />

      <Footer />
    </>
  )
}
