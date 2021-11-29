import React from "react"
import { css } from "twin.macro"

const IntimateSessionHeader: React.FC = () => {
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
        src="/images/IntimateSession/header.png"
        alt=""
        tw="w-screen"
      />
    </>
  )
}

export { IntimateSessionHeader }
