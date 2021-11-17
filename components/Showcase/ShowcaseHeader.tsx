import React from "react"
import { css } from "twin.macro"

const ShowcaseHeader: React.FC = () => {
  return (
    <>
      <div
        css={css`
          margin-top: 80px;
        `}
      />
      <img
        src="/images/Showcase/header.png"
        alt=""
        style={{ width: "100vw" }}
      />
    </>
  )
}

export { ShowcaseHeader }
