import React from "react"
import { css } from "twin.macro"
import HeightImage from "@components/HeightImage/HeightImage"
import WidthImage from "@components/WidthImage/WidthImage"

const SponsorSection: React.FC = () => {
  return (
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
  )
}

export { SponsorSection }
