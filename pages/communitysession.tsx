import "twin.macro"
import Head from "next/head"
// import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { CardSection } from "@components/CommunitySession/CardSection"
import { CommunitySessionHeader } from "@components/CommunitySession/CommunitySessionHeader"

export default function CommunitySession() {
  return (
    <>
      <Head>
        <title>Community Session - JGTC Festival</title>
        <meta name="description" content="JGTC Community Session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <div tw="overflow-x-hidden">
        <CommunitySessionHeader />
      </div>

      <CardSection />

      <Footer />
    </>
  )
}
