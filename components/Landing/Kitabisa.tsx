import { css } from "twin.macro"
import React from "react"
import HeightImage from "@components/HeightImage/HeightImage"
import WidthImage from "@components/WidthImage/WidthImage"

const Kitabisa: React.FC = () => {
  return (
    <div tw="bg-mainblack relative mt-24">
      <div tw="absolute top-0 left-0">
        <HeightImage
          url="/images/Footer/LOGO.png"
          height="215"
          alt="JGTC Logo"
        />
      </div>
      <div tw="absolute right-0 h-full">
        <div tw="flex items-center h-full">
          <img
            src="/images/Landing/sponsorpage/RightSide.png"
            alt="gambar"
            tw="h-full"
          />
        </div>
      </div>
      <div
        tw="absolute"
        css={css`
          left: -10%;
          bottom: -9%;
        `}
      >
        <HeightImage
          url="/images/Landing/sponsorpage/left-sapi.png"
          height="450"
          alt="decoration"
        />
      </div>
      <div tw="mt-12" />
      <h1 tw="font-drukwide font-bold text-9xl text-orangejeruk text-center">
        JGTC
      </h1>
      <h2 tw="font-drukwide font-bold text-6xl text-darkblue mt-3 text-center">
        #Peduli<span tw="text-olivegreen">Sesama</span>
      </h2>
      <h3 tw="text-wheat text-3xl font-futura mt-3 text-center">
        Bersama pulih dari COVID-19
      </h3>
      <h3 tw="text-wheat text-3xl font-condensedmedium mt-6 text-center">
        Ulurkan Tanganmu Bantu Tenaga Kesehatan dan Masyarakat <br /> Terdampak
        COVID-19
      </h3>

      <div tw="flex items-center justify-center mt-12">
        <a
          tw="text-wheat px-10 py-3 text-4xl bg-darkblue rounded-full font-futura"
          href="https://kitabisa.com/campaign/jgtcpedulisesama"
          target="_blank"
          rel="noreferrer"
          css={css`
            transition: transform 0.2s;
            :hover {
              transform: scale(1.1);
            }
          `}
        >
          DONASI SEKARANG
        </a>
      </div>

      <p tw="text-center font-condensedmedium text-white text-3xl text-wheat mt-12">
        Saksikan <span tw="text-orangejeruk">JGTC Showcase</span>,{" "}
        <span tw="text-darkblue">Jazz on the Sofa</span>, <br />
        <span tw="text-olivegreen">Intimate Session</span>, dan{" "}
        <span tw="text-orangejeruk">Community Session</span> <br />
        setiap minggunya hanya di
      </p>

      <div tw="flex items-center justify-center mt-12">
        <a
          href="https://www.youtube.com/user/JGTCofficial/featured"
          target="_blank"
          rel="noreferrer"
          tw="flex items-center"
        >
          <HeightImage url="/images/Landing/sponsorpage/yt.png" height="44" />
          <h1 tw="text-wheat font-futura">Jazz Goes To Campus</h1>
        </a>
      </div>
    </div>
  )
}

export { Kitabisa }
