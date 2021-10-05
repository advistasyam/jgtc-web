import React from "react"
import Image from "next/image"
import tw, { css } from "twin.macro"

interface HeightImageProps {
  url: string
  height: string
  alt?: string
  cssextend?: string
  undragable?: boolean
}

const HeightImage: React.FC<HeightImageProps> = ({
  url,
  height,
  alt = "",
  cssextend = "",
  undragable = false,
}) => {
  return (
    <div
      css={[
        css`
          object-fit: contain;
          div {
            position: unset !important;
            height: ${`${height}`}px;
          }
        `,
        css`
          ${`${cssextend}`}
        `,
      ]}
    >
      <Image
        src={url}
        layout="fill"
        css={[
          css`
            object-fit: contain;
            width: unset !important;
            position: relative !important;
            height: 100% !important;
          `,
          undragable &&
            css`
              user-drag: none;
              -webkit-user-drag: none;
              user-select: none;
              -moz-user-select: none;
              -webkit-user-select: none;
              -ms-user-select: none;
            `,
        ]}
        alt={alt}
      />
    </div>
  )
}

export default HeightImage
