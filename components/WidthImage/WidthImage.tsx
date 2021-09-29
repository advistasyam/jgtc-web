import React from "react"
import Image from "next/image"
import { css } from "twin.macro"

interface WidthImageProps {
  url: string
  width: string
  alt?: string
  cssextend?: string
}

const WidthImage: React.FC<WidthImageProps> = ({ url, width, alt="", cssextend="" }) => {
  return (
    <div
      css={[css`
        object-fit: contain;
        div {
          position: unset !important;
          width: ${`${width}`}px;
        }
      `, css`${`${cssextend}`}`]}
    >
      <Image
        src={url}
        layout="fill"
        css={css`
          object-fit: contain;
          height: unset !important;
          position: relative !important;
          width: 100% !important;
        `}
        alt={alt}
      />
    </div>
  )
}

export default WidthImage
