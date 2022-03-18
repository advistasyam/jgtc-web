import React from "react"
import Image from "next/image"
import { css } from "twin.macro"

const SocialMedia: React.FC = () => {
  return (
    <>
      <div tw="hidden md:flex flex-row space-x-4 items-center z-[100]">
        <p tw="text-white text-xl text-graydim cursor-default">FOLLOW US</p>
        <a
          href="https://youtube.com/JGTCofficial"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/Navbar/youtube.png"
            alt="youtube link"
            width={36}
            height={36}
          />
        </a>
        <a
          href="https://twitter.com/JGTCfestival"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/Navbar/twitter.png"
            alt="twitter link"
            width={36}
            height={36}
          />
        </a>
        <a
          href="https://instagram.com/jgtcfestival"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/Navbar/instagram.png"
            alt="instagram link"
            width={36}
            height={36}
          />
        </a>
        <a
          href="https://facebook.com/jgtcfestival"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/Navbar/fb-svg.png"
            alt="facebook link"
            width={36}
            height={36}
          />
        </a>
      </div>
    </>
  )
}

export { SocialMedia }
