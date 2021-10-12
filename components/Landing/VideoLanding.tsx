import React, { useState } from "react"
import { css } from "twin.macro"
import WidthImage from "@components/WidthImage/WidthImage"

const VideoLanding: React.FC = () => {
  const [mute, setMute] = useState(true)
  return (
    <div tw="relative">
      <video
        loop
        autoPlay
        muted={mute}
        css={css`
          padding-top: 80px;
          height: 100vh;
          width: 100vw;
          object-fit: cover;
        `}
        src="/videos/landing/Teaser-44th-JGTC.mp4"
      />
      <div
        onClick={() => setMute(!mute)}
        tw="text-white cursor-pointer border-4 border-white rounded-full"
        css={css`
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translate(-50%, 120%);
          width: 43px;
          height: 43px;
        `}
      >
        <div
          css={[
            css`
              position: absolute;
              transition: transform 0.3s;
              bottom: 10%;
              left: 40%;
              width: 6px;
              height: 27px;
              transform: skew(45deg);
              background: white;
            `,
            !mute &&
              css`
                transform: skew(0deg);
                transform: scale(0.5);
              `,
          ]}
        />
        <WidthImage
          url={"/images/Landing/volume_up.svg"}
          alt="speaker button"
          width="32"
          cssextend={`
              padding-top: 1px;
              padding-left: 1px;
            `}
        />
      </div>
    </div>
  )
}

export { VideoLanding }
