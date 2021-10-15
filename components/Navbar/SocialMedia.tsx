import React from "react"
import Image from "next/image"
import {css} from "twin.macro"

const SocialMedia: React.FC = () => {
  return (
    <>
      <div tw="hidden md:flex flex-row space-x-4 items-center">
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

      {/* Mobile Version */}
      <div tw="block md:hidden fixed left-2 z-10" css={css`top: 40%;`}>
        <div tw="flex flex-col space-y-2">
          <a
            href="https://youtube.com/JGTCofficial"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/Navbar/youtube.png"
              alt="youtube link"
              width={28}
              height={28}
              tw="bg-mainblack rounded-full"
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
              width={28}
              height={28}
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
              width={28}
              height={28}
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
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export { SocialMedia }