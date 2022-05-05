import React from "react"
import { css } from "twin.macro"

const ImageDecoration: React.FC = () => {
  return (
    <>
      <img
        src="/images/Jots/orangetrumpet.png"
        alt=""
        tw="absolute"
        css={css`
          top: 4%;
          left: 0;
          width: 250px;
          z-index: -1;

          @media screen and (max-width: 1536px) {
            width: 200px;
            // left: -12%;
          }

          @media screen and (max-width: 767px) {
            left: -20%;
            transform: rotate(-30deg);
            // top: 50%;
            width: 200px;
          }
        `}
      />
      <img
        src="/images/Jots/orangetrumpet.png"
        alt=""
        tw="absolute"
        css={css`
          top: 4%;
          right: 0;
          width: 250px;
          z-index: -1;
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);

          @media screen and (max-width: 1536px) {
            width: 200px;
            // left: -12%;
          }

          @media screen and (max-width: 767px) {
            left: -20%;
            transform: rotate(-30deg);
            // top: 50%;
            width: 200px;
          }
        `}
      />
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
      <img
        src="/images/Jots/trumpet.png"
        alt=""
        tw="absolute"
        css={css`
          top: 21%;
          right: 0%;
          width: 200px;
          z-index: -1;

          @media screen and (max-width: 767px) {
            top: 30%;
            width: 104px;
            right: -10%;
          }
        `}
      />
      <img
        src="/images/Landing/sponsorpage/piano.png"
        alt=""
        tw="absolute"
        css={css`
          top: 55%;
          left: 0;
          width: 250px;
          z-index: -1;

          @media screen and (max-width: 1536px) {
            width: 200px;
            // left: -12%;
          }

          @media screen and (max-width: 767px) {
            left: -20%;
            transform: rotate(-30deg);
            // top: 50%;
            width: 200px;
          }
        `}
      />
      <img
        src="/images/Jots/drinking.png"
        alt=""
        tw="absolute"
        css={css`
          bottom: 0;
          right: 0;
          width: 350px;
          z-index: -1;

          @media screen and (max-width: 767px) {
            width: 200px;
          }
        `}
      />
    </>
  )
}

export { ImageDecoration }
