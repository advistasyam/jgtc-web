import "twin.macro"
import Head from "next/head"
import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { JotsHeader } from "@components/Jots/JotsHeader"
import { CardSection } from "@components/Jots/CardSection"

export default function Jots() {
  return (
    <>
      <Head>
        <title>Jazz On The Sofa - JGTC Festival</title>
        <meta name="description" content="JGTC Jazz On The Sofa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div tw="overflow-x-hidden">
        <JotsHeader />
      </div>

      <CardSection />

      <Footer
        addons={true}
      />
    </>
  )
}
