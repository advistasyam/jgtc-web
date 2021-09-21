import { css } from "twin.macro"
import React from "react"
import HeightImage from "../HeightImage/HeightImage"
import WidthImage from "../WidthImage/WidthImage"

const Footer: React.FC = () => {
  return (
    <div
      tw="bg-mainblack"
      css={css`
        padding-top: 180px;
      `}
    >
      <img
        src="/images/Footer/gap-footer.png"
        css={css`
          width: 100vw;
          height: 200px;
          object-fit: cover;
        `}
      />
      <div
        tw="flex flex-row space-x-4 items-center px-pcontainer"
        css={css`
          height: 380px;
          padding-left: 80px;
        `}
      >
        <HeightImage url="/images/Footer/LOGO.png" height="285" />
        <div tw="flex flex-col space-y-6 tracking-wide">
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage url="/images/Footer/location.svg" width="30" />
            <div>
              <p>Jazz Goes to Campus Office</p>
              <p>Lobby Gedung A (Nathanael Iskandar)</p>
              <p>Faculty of Economics and Business, Universitas Indonesia</p>
              <p>Depok, Indonesia</p>
            </div>
          </div>
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage url="/images/Footer/phone.svg" width="30" />
            <p>+62 877 1990 9014 (Nandira)</p>
          </div>
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage url="/images/Footer/mail.svg" width="30" />
            <p>executive@jgtc-festival.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
