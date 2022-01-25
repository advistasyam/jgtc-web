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
          z-index: -1;

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
          z-index: -1;

          @media screen and (max-width: 767px) {
            display: none;
          }
        `}
      />
      {/* <img
        src="/images/IntimateSession/trumpet.png"
        alt=""
        tw="absolute block sm:hidden"
        css={css`
          top: 10%;
          right: -5%;
          width: 100px;
          z-index: -1;
        `}
      /> */}
      <img
        src="/images/IntimateSession/car.png"
        alt=""
        tw="absolute block sm:hidden"
        css={css`
          top: 30%;
          left: -5%;
          width: 160px;
          z-index: -1;
        `}
      />
      {/* <img
        src="/images/IntimateSession/leftdrum.png"
        alt=""
        tw="absolute hidden sm:block"
        css={css`
          bottom: 0;
          left: 0;
          width: 270px;
          z-index: -1;
        `}
      /> */}
      {/* <img
        src="/images/IntimateSession/rightdrum.png"
        alt=""
        tw="absolute"
        css={css`
          bottom: 0;
          right: 0;
          width: 270px;
          z-index: -1;

          @media screen and (max-width: 767px) {
            width: 150px;
            bottom: 5%;
            right: 0;
          }
        `}
      /> */}
      <img
        src="/images/Landing/sponsorpage/piano.png"
        alt=""
        tw="absolute"
        css={css`
          top: 35%;
          left: -10%;
          width: 500px;
          transform: rotate(-105deg);
          z-index: -1;

          @media screen and (max-width: 1536px) {
            width: 350px;
            left: -12%;
          }

          @media screen and (max-width: 1536px) {
            left: -10%;
            top: 50%;
            width: 320px;
          }

          @media screen and (max-width: 768px) {
            left: -30%;
            top: 50%;
            width: 240px;
          }
        `}
      />
      <img
        src="/images/Landing/sponsorpage/trompet.png"
        alt=""
        tw="absolute"
        css={css`
          top: 10%;
          right: -2%;
          width: 500px;
          transform: rotate(180deg);
          z-index: -1;

          @media screen and (max-width: 767px) {
            width: 250px;
            top: 10%;
            right: -25%;
          }
        `}
      />
      <img
        src="/images/Museum/drink.png"
        alt=""
        tw="absolute"
        css={css`
          bottom: -10%;
          right: -10%;
          width: 500px;
          z-index: -1;

          @media screen and (max-width: 767px) {
            width: 250px;
            bottom: 10%;
            right: -25%;
          }
        `}
      />
    </>
  )
}

export { ImageDecoration }
