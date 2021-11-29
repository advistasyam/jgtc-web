import React from "react"
import { css } from "twin.macro"

const JotsHeader: React.FC = () => {
  return (
    <>
      <div
        css={css`
          margin-top: 80px;

          @media screen and (max-width: 767px) {
            margin-top: 65px;
          }
        `}
      />
      <img
        src="/images/Jots/header.png"
        alt=""
        tw="w-screen block"
      />
      {/* <img
        src="/images/Showcase/headerMobile.png"
        alt=""
        tw="w-screen block md:hidden"
      /> */}
    </>
  )
}

export { JotsHeader }
