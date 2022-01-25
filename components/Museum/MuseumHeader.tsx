import React from "react"
import { css } from "twin.macro"

const MuseumHeader: React.FC = () => {
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
        src="/images/Museum/header.png"
        alt=""
        tw="w-screen"
      />
    </>
  )
}

export { MuseumHeader }
