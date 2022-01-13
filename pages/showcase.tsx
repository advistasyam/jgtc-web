import "twin.macro"
import Head from "next/head"
import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { CardSection } from "@components/Showcase/CardSection"
import { ShowcaseHeader } from "@components/Showcase/ShowcaseHeader"

export default function Showcase() {
  return (
    <>
      <Head>
        <title>Showcase - JGTC Festival</title>
        <meta name="description" content="JGTC Showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <div tw="overflow-x-hidden">
        <ShowcaseHeader />
      </div>

      <CardSection />

      <Footer />
    </>
  )
}
