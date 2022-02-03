import "twin.macro"
import Head from "next/head"
import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { CardSection } from "@components/Museum/CardSection"
import { MuseumHeader } from "@components/Museum/MuseumHeader"

export default function Museum() {
  return (
    <>
      <Head>
        <title>Museum - JGTC Festival</title>
        <meta name="description" content="JGTC Museum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <div tw="overflow-x-hidden">
        <MuseumHeader />
      </div>

      <CardSection />

      <Footer />
    </>
  )
}
