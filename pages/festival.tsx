import "twin.macro"
import Head from "next/head"
import { Footer } from "@components/Footer"
import { ShowcaseHeader } from "@components/Showcase/ShowcaseHeader"
import { MainPage } from "@components/Festival/MainPage"

export default function Showcase() {
  return (
    <>
      <Head>
        <title>Festival - JGTC Festival</title>
        <meta name="description" content="JGTC Showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <div tw="overflow-x-hidden">
        <ShowcaseHeader />
      </div>

      <MainPage />

      <Footer />
    </>
  )
}
