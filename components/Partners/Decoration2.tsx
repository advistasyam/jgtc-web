import React from "react"
import { css } from "twin.macro"

const Decoration2: React.FC = () => {
  return (
    <>
      <img
        src="/images/Showcase/splitbiola.png"
        alt=""
        tw="absolute"
        css={css`
          top: 5%;
          left: 0;
          width: 350px;
          z-index: -1;

          @media screen and (max-width: 1280px) {
            width: 350px;
            left: -10%;
          }

          @media screen and (max-width: 767px) {
            width: 300px;
            left: -35%;
          }
        `}
      />
      <img
        src="/images/Showcase/splitpiano.png"
        alt=""
        tw="absolute"
        css={css`
          top: 21%;
          right: 3%;
          width: 200px;
          z-index: -1;

          @media screen and (max-width: 767px) {
            top: 30%;
            width: 150px;
            right: -10%;
          }
        `}
      />
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
            left: -30%;
            top: 50%;
            width: 240px;
          }
        `}
      />
      <img
        src="/images/Showcase/trumpetgreenyellow.png"
        alt=""
        tw="absolute"
        css={css`
          top: 55%;
          right: -10%;
          width: 500px;
          z-index: -1;

          @media screen and (max-width: 1280px) {
            width: 350px;
          }

          @media screen and (max-width: 767px) {
            top: 64%;
            right: -35%;
            transform: rotate(20deg);
          }
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
          transform: rotate(-20deg);
          z-index: -1;

          @media screen and (max-width: 767px) {
            width: 250px;
            bottom: 10%;
            left: -25%;
          }
        `}
      />
      <img
        src="/images/Showcase/trumpetgreen.png"
        alt=""
        tw="absolute"
        css={css`
          bottom: 0%;
          right: 7%;
          width: 350px;
          z-index: -1;

          @media screen and (max-width: 767px) {
            width: 200px;
            bottom: 2%;
            right: -20%;
            transform: rotate(90deg);
          }
        `}
      />
    </>
  )
}

export { Decoration2 }
