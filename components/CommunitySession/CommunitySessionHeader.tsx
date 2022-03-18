import React from "react"
import { css } from "twin.macro"

const CommunitySessionHeader: React.FC = () => {
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
        src="/images/CommunitySession/header.png"
        alt=""
        tw="w-screen"
      />
    </>
  )
}

export { CommunitySessionHeader }
