import React from "react"
import { css } from "twin.macro"
import { useState } from "react"
import Head from "next/head"
import HeightImage from "../components/HeightImage/HeightImage"
import WidthImage from "../components/WidthImage/WidthImage"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
// import "react-multi-carousel/lib/styles.css"
import { Example } from "../components/Carousel/Carousel"
import fg from "fast-glob"

export default function Home({ lineup }: any) {
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
      <div tw="relative">
        <video
          loop
          autoPlay
          muted={mute}
          css={css`
            padding-top: 80px;
            height: 100vh;
            width: 100vw;
            object-fit: cover;
          `}
          src="/videos/landing/Teaser-44th-JGTC.mp4"
        />
        <div
          onClick={() => setMute(!mute)}
          tw="text-white cursor-pointer border-4 border-white rounded-full"
          css={css`
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translate(-50%, 120%);
            width: 43px;
            height: 43px;
          `}
        >
          <div
            css={[
              css`
                position: absolute;
                transition: transform 0.3s;
                bottom: 10%;
                left: 40%;
                width: 6px;
                height: 27px;
                transform: skew(45deg);
                background: white;
              `,
              !mute &&
                css`
                  transform: skew(0deg);
                  transform: scale(0.5);
                `,
            ]}
          />
          <WidthImage
            url={"/images/Landing/volume_up.svg"}
            alt="speaker button"
            width="32"
            cssextend={`
              padding-top: 1px;
              padding-left: 1px;
            `}
          />
        </div>
      </div>

      <div tw="bg-mainblack pt-section relative overflow-hidden">
        <div tw="flex items-center justify-center mt-12">
          <div tw="container mx-auto px-64 relative">
            <div tw="flex justify-between items-end">
              <h1 tw="text-olivegreen font-drukwide text-5xl">SPONSORS</h1>
              <WidthImage
                url="/images/Landing/sponsorpage/playingbiola.png"
                width="300"
                alt="piano"
                cssextend="margin-bottom: -15px"
              />
            </div>
            <a
              href="https://kitabisa.com/campaign/jgtcpedulisesama"
              target="_blank"
              rel="noreferrer"
            >
              <HeightImage
                url="/images/Landing/sponsorpage/kitabisa.png"
                height="600"
                alt="Kitabisa JGTC Link"
                cssextend={`
                  transition: transform .2s;
                  :hover {
                    transform: scale(1.1);
                  }
                `}
              />
            </a>
          </div>
        </div>
        <div
          tw="absolute top-0"
          css={css`
            left: -5%;
          `}
        >
          <WidthImage
            url="/images/Landing/sponsorpage/piano.png"
            width="300"
            alt="piano"
            cssextend=""
          />
        </div>
        <div
          tw="absolute top-0"
          css={css`
            right: -5%;
          `}
        >
          <WidthImage
            url="/images/Landing/sponsorpage/trompet.png"
            width="300"
            alt="piano"
            cssextend=""
          />
        </div>
        <div
          tw="absolute bottom-0"
          css={css`
            left: 0%;
          `}
        >
          <WidthImage
            url="/images/Landing/sponsorpage/playingguitar.png"
            width="400"
            alt="piano"
            cssextend=""
          />
        </div>
        <div
          tw="absolute bottom-0"
          css={css`
            right: 0%;
          `}
        >
          <WidthImage
            url="/images/Landing/sponsorpage/playingtrompet.png"
            width="400"
            alt="piano"
            cssextend=""
          />
        </div>
      </div>

      <div tw="bg-mainblack pt-section">
        <h1 tw="font-drukwide text-darkblue text-6xl text-center">
          PAST LINE UP
        </h1>
        <h2 tw="text-wheat font-druk text-3xl text-center m-2">
          Reminiscing musicians from previous Jazz Goes to Campus Festivals
        </h2>

        <Example lineup={lineup} />
      </div>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const lineup = (
    await fg(["public/images/Landing/pastlineup/*"], {
      onlyFiles: true,
    })
  ).map(val => val.replace("public/", "/"))

  return {
    props: {
      lineup,
    },
  }
}
