import "twin.macro"
import Head from "next/head"
import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { CardSection } from "@components/IntimateSession/CardSection"
import { IntimateSessionHeader } from "@components/IntimateSession/IntimateSessionHeader"

export default function IntimateSession() {
  return (
    <>
      <Head>
        <title>Intimate Session - JGTC Festival</title>
        <meta name="description" content="JGTC Intimate Session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div tw="overflow-x-hidden">
        <IntimateSessionHeader />
      </div>

      <CardSection />

      <Footer />
    </>
  )
}
