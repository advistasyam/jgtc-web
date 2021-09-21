import React from "react"
import Image from "next/image"
import { css } from "twin.macro"

interface WidthImageProps {
  url: string
  width: string
}

const WidthImage: React.FC<WidthImageProps> = ({ url, width }) => {
  return (
    <div
      css={css`
        object-fit: contain;
        div {
          position: unset !important;
          width: ${`${width}`}px;
        }
      `}
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
      />
    </div>
  )
}

export default WidthImage
