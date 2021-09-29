import tw, { css } from "twin.macro"
import { useState } from "react"
import Head from "next/head"
import HeightImage from "../components/HeightImage/HeightImage"
import WidthImage from "../components/WidthImage/WidthImage"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function Home() {
  const [mute, setMute] = useState(true)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1366 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1366, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

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
        >
          <source src="/videos/landing/Teaser-44th-JGTC.mp4" type="video/mp4" />
        </video>
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
          <WidthImage
            url={
              mute
                ? "/images/Landing/volume_off.svg"
                : "/images/Landing/volume_up.svg"
            }
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
            <div
              tw="w-full mt-4"
              css={css`
                height: 600px;
                background-color: rgb(192, 83, 40);
              `}
            ></div>
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

        <div
          tw="mt-section px-6 flex lg:hidden space-x-6 items-center justify-start"
          css={css`
            flex-wrap: nowrap;
            overflow-x: scroll;
            ::-webkit-scrollbar {
              width: 0; /* Remove scrollbar space */
              background: transparent; /* Optional: just make scrollbar invisible */
            }
            scrollbar-width: none;
          `}
        >
          <div
            tw="flex items-center justify-center space-x-6"
            css={css`
              flex: 0 0 auto;
              overflow-x: hidden;
            `}
          >
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
          </div>
        </div>

        {/* Desktop Page */}
        {/* <div
          tw="mt-section container mx-auto hidden lg:flex space-x-6 items-center justify-start"
          css={css`
            flex-wrap: nowrap;
            overflow-x: scroll;
            ::-webkit-scrollbar {
              width: 0;
              background: transparent;
            }
            scrollbar-width: none;
          `}
        >
          <div
            tw="flex items-center justify-center space-x-6"
            css={css`
              flex: 0 0 auto;
              overflow-x: hidden;
            `}
          >
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
          </div>
        </div> */}

        <div tw="mt-section hidden lg:block relative px-pcontainer">
          <Carousel responsive={responsive} renderButtonGroupOutside={true}>
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
          </Carousel>
        </div>

        {/* <Carousel responsive={responsive}>
          <div tw="text-white">Item 1</div>
          <div tw="text-white">Item 2</div>
          <div tw="text-white">Item 3</div>
          <div tw="text-white">Item 4</div>
        </Carousel> */}
      </div>

      <Footer />
    </div>
  )
}
