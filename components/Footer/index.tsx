import { css } from "twin.macro"
import React from "react"
import HeightImage from "../HeightImage/HeightImage"
import WidthImage from "../WidthImage/WidthImage"

const Footer: React.FC = () => {
  return (
    <div
      tw="bg-mainblack overflow-x-hidden"
      css={css`
        margin-top: 200px;
      `}
    >
      <HeightImage
        url="/images/Footer/gap-footer.png"
        cssextend={`
          div {
            width: 100vw;
            height: 200px;
          }
          div img {
            object-fit: cover !important;
          }
        `}
        height="200"
        alt="footer section"
      />
      {/* <img
        src="/images/Footer/gap-footer.png"
        css={css`
          width: 100vw;
          height: 200px;
          object-fit: cover;
        `}
      /> */}
      <div
        tw="flex flex-row space-x-4 items-center px-pcontainer"
        css={css`
          height: 380px;
          padding-left: 80px;
        `}
      >
        <HeightImage url="/images/Footer/LOGO.png" height="285" alt="footer logo" />
        <div tw="flex flex-col space-y-6 tracking-wide">
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage url="/images/Footer/location.svg" width="30" alt="jgtc location" />
            <div>
              <p>Jazz Goes to Campus Office</p>
              <p>Lobby Gedung A (Nathanael Iskandar)</p>
              <p>Faculty of Economics and Business, Universitas Indonesia</p>
              <p>Depok, Indonesia</p>
            </div>
          </div>
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage url="/images/Footer/phone.svg" width="30" alt="jgtc phone number" />
            <p>+62 877 1990 9014 (Nandira)</p>
          </div>
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage url="/images/Footer/mail.svg" width="30" alt="jgtc email" />
            <p>executive@jgtc-festival.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
