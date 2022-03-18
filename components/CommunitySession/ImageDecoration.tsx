import React from "react"
import { css } from "twin.macro"

const ImageDecoration: React.FC = () => {
  return (
    <>
      <img
        src="/images/Jots/topleft.png"
        alt=""
        tw="absolute"
        css={css`
          top: 0;
          left: 0;
          width: 50px;
          z-index: 5;

          @media screen and (max-width: 767px) {
            display: none;
          }
        `}
      />
      <img
        src="/images/Jots/topright.png"
        alt=""
        tw="absolute"
        css={css`
          top: 0;
          right: 0;
          width: 50px;
          z-index: 5;

          @media screen and (max-width: 767px) {
            display: none;
          }
        `}
      />
      <img
        src="/images/IntimateSession/trumpet.png"
        alt=""
        tw="absolute block sm:hidden"
        css={css`
          top: 10%;
          right: -5%;
          width: 100px;
          z-index: 5;
        `}
      />
      <img
        src="/images/IntimateSession/car.png"
        alt=""
        tw="absolute block sm:hidden"
        css={css`
          top: 30%;
          left: -5%;
          width: 160px;
          z-index: 5;
        `}
      />
      <img
        src="/images/CommunitySession/left.png"
        alt=""
        tw="absolute hidden sm:block"
        css={css`
          bottom: 0;
          left: 0;
          width: 100px;
          z-index: 5;

          @media screen and (max-width: 767px) {
            width: 50px;
            bottom: 5%;
            right: 0;
          }
        `}
      />
      <img
        src="/images/CommunitySession/right.png"
        alt=""
        tw="absolute"
        css={css`
          bottom: 0;
          right: 0;
          width: 100px;
          z-index: 5;

          @media screen and (max-width: 767px) {
            width: 50px;
            bottom: 5%;
            right: 0;
          }
        `}
      />
    </>
  )
}

export { ImageDecoration }
