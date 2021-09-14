import React from "react"
import Image from "next/image"
import { css } from "twin.macro"

interface HeightImageProps {
  url: string
  height: string
}

const HeightImage: React.FC<HeightImageProps> = ({ url, height }) => {
  return (
    <div
      css={css`
        object-fit: contain;
        div {
          position: unset !important;
          height: ${`${height}`}px;
        }
      `}
    >
      <Image
        src={url}
        layout="fill"
        css={css`
          object-fit: contain;
          width: unset !important;
          position: relative !important;
          height: 100% !important;
        `}
      />
    </div>
  )
}

export default HeightImage
