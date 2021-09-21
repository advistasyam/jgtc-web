import { css } from "twin.macro"
import { useState } from "react"
import Head from "next/head"
import TypeIt from "typeit-react"
import HeightImage from "../components/HeightImage/HeightImage"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default function Home() {
  const [mute, setMute] = useState(true)
  return (
    <div>
      <Head>
        <title>JGTC Festival</title>
        <meta
          name="description"
          content="The biggest jazz festival held by student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div tw="relative z-20" css={css`
        margin-top: 80px;
      `}>
        <video loop autoPlay muted={mute} >
          <source src="/videos/landing/Teaser-44th-JGTC.mp4" type="video/mp4" />
        </video>
        <img
          onClick={() => setMute(!mute)}
          tw="text-white cursor-pointer"
          css={css`
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 120%);
            width: 40px;
          `}
          src={mute ? "/images/Landing/volume_off.svg" : "/images/Landing/volume_up.svg"}
        />
      </div>

      <div tw="bg-mainblack pt-section">
        <h1 tw="font-drukwide text-darkblue text-6xl text-center">PAST LINE UP</h1>
        <h2 tw="text-wheat font-druk text-3xl text-center m-2">Reminiscing musicians from previous Jazz Goes to Campus Festivals</h2>

        <div tw="mt-section px-pcontainer flex space-x-6 items-center justify-center">
          <HeightImage 
            url="/images/Landing/orange.png"
            height="260"
          />
          <HeightImage 
            url="/images/Landing/green.png"
            height="260"
          />
          <HeightImage 
            url="/images/Landing/orange.png"
            height="260"
          />
          <HeightImage 
            url="/images/Landing/green.png"
            height="260"
          />
        </div>
      </div>

      <Footer />

      {/* <div tw="overflow-x-hidden min-h-screen">
        <div tw="w-screen flex flex-col items-center justify-center">
          <HeightImage url="/images/logo-jgtc-black.png" height="500" />
          <TypeIt
            tw="text-2xl"
            getBeforeInit={instance => {
              instance
                .type("Our website is under development")
                .pause(750)
                .delete()
                .pause(500)
                .type(
                  "The biggest jazz festival held by student is coming soon"
                )
                .pause(500)

              // Remember to return it!
              return instance
            }}
            options={{
              // @ts-ignore
              speed: 60,
              loop: true,
            }}
          />
        </div>
      </div> */}
    </div>
  )
}
