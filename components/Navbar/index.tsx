import React from "react"
import Image from "next/image"
import { css } from "twin.macro"

const Navbar: React.FC = () => {
  return (
    <div
      tw="bg-mainblack flex items-center justify-between fixed top-0 z-10 w-screen"
      css={css`
        height: 80px;
        padding-left: 60px;
        padding-right: 80px;
      `}
    >
      <Image
        src="/images/Navbar/NavSvg.svg"
        alt="Navbar Logo"
        height={90}
        width={101}
      />
      {/* <img src="/images/Navbar/NavSvg.svg" alt="gambar" /> */}
      <div tw="flex flex-row space-x-4 items-center">
        <p tw="text-white text-xl text-graydim cursor-default">FOLLOW US</p>
        <a href="https://youtube.com/JGTCofficial" target="_blank">
          <Image
            src="/images/Navbar/youtube.svg"
            alt="youtube link"
            width={36}
            height={36}
          />
        </a>
        <a href="https://twitter.com/JGTCfestival" target="_blank">
          <Image
            src="/images/Navbar/twitter.svg"
            alt="twitter link"
            width={36}
            height={36}
          />
        </a>
        <a href="https://instagram.com/jgtcfestival" target="_blank">
          <Image
            src="/images/Navbar/instagram.svg"
            alt="instagram link"
            width={36}
            height={36}
          />
        </a>
        <a href="https://facebook.com/jgtcfestival" target="_blank">
          <Image
            src="/images/Navbar/fb-svg.svg"
            alt="facebook link"
            width={36}
            height={36}
          />
        </a>
      </div>
    </div>
  )
}

export { Navbar }
