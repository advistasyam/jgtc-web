import Head from "next/head"
import "twin.macro"
import { Footer } from "@components/Footer"

export default function About() {
  return (
    <>
      <Head>
        <title>Community Session - JGTC Festival</title>
        <meta name="description" content="JGTC Community Session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div tw="container mx-auto flex flex-col mt-40">
        <h1 tw="text-center text-3xl md:text-5xl text-orangejeruk font-drukwide">
          ABOUT US
        </h1>
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

      <Footer
        addons={true}
      />
    </>
  )
}
