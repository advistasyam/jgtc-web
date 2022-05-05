import "twin.macro"
import Head from "next/head"
import { Footer } from "@components/Footer"
import { PartnersHeader } from "@components/Partners/PartnersHeader"
import { CardSection } from "@components/Partners/CardSection"

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners - JGTC Festival</title>
        <meta name="description" content="JGTC Partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div tw="overflow-x-hidden">
        <PartnersHeader />
      </div>

      <CardSection />

      <Footer
        addons={true}
      />
    </>
  )
}