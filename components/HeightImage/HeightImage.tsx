import React from "react"
import Image from "next/image"
import { css } from "twin.macro"

interface HeightImageProps {
  url: string
  height: string
  alt?: string
  cssextend?: string
}

const HeightImage: React.FC<HeightImageProps> = ({ url, height, alt="", cssextend="" }) => {
  return (
    <div
      css={[css`
        object-fit: contain;
        div {
          position: unset !important;
          height: ${`${height}`}px;
        }
      `, css`${`${cssextend}`}`]}
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
        alt={alt}
      />
    </div>
  )
}

export default HeightImage
