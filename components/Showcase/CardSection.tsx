import { css } from "twin.macro"
import React from "react"
import Image from "next/image"
import WidthImage from "@components/WidthImage/WidthImage"

const CardSection: React.FC = () => {
  return (
    <>
      <div tw="mt-24" />
      <h1 tw="font-drukwide text-orangejeruk font-bold text-6xl text-center">
        JGTC SHOWCASE
      </h1>
      <div tw="mt-12" />
      <div tw="relative">
        <div tw="container mx-auto">
          <div tw="flex flex-row flex-wrap justify-center">
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/tompi.png"
                alt="Tompi"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/ecoutez.jpg"
                alt="Ecoutez"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/andre.jpg"
                alt="Andre"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/andien.png"
                alt="Andien"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/kamga.png"
                alt="Kamga"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/ify.jpg"
                alt="Ify"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/isyana.jpg"
                alt="Isyana"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/tohpati.jpg"
                alt="Tohpati"
                width="500"
              />
            </div>
            <div tw="mx-8 my-8 border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/kevin.jpg"
                alt="Kevin"
                width="500"
              />
            </div>
          </div>
        </div>
        <img
          src="/images/Landing/sponsorpage/piano.png"
          alt=""
          tw="absolute"
          css={css`
            top: 50%;
            left: -10%;
            width: 500px;
            rotate: 90;
            transform: rotate(-105deg);
          `}
        />
        <img
          src="/images/Landing/sponsorpage/trompet.png"
          alt=""
          tw="absolute"
          css={css`
            bottom: -5%;
            left: -3%;
            width: 500px;
            rotate: 90;
            transform: rotate(-20deg);
          `}
        />
      </div>
    </>
  )
}

export { CardSection }
