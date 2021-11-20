import React from "react"
import { css } from "twin.macro"

const ShowcaseHeader: React.FC = () => {
  return (
    <>
      <div
        css={css`
          margin-top: 80px;

          @media screen and (max-width: 767px) {
            margin-top: 50px;
          }
        `}
      />
      <img
        src="/images/Showcase/header.png"
        alt=""
        tw="w-screen hidden md:block"
      />
      <img
        src="/images/Showcase/headerMobile.png"
        alt=""
        tw="w-screen block md:hidden"
      />
    </>
  )
}

export { ShowcaseHeader }
