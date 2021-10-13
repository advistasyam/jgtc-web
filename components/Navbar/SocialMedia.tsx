import React from "react"
import Image from "next/image"
import "twin.macro"

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
            src="/images/Navbar/youtube.svg"
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
            src="/images/Navbar/twitter.svg"
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
            src="/images/Navbar/instagram.svg"
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
            src="/images/Navbar/fb-svg.svg"
            alt="facebook link"
            width={36}
            height={36}
          />
        </a>
      </div>

      {/* Mobile Version */}
      <div tw="block md:hidden fixed bottom-3 right-3 z-10">
        <div tw="flex flex-col space-y-2">
          <a
            href="https://youtube.com/JGTCofficial"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/Navbar/youtube.svg"
              alt="youtube link"
              width={28}
              height={28}
            />
          </a>
          <a
            href="https://twitter.com/JGTCfestival"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/Navbar/twitter.svg"
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
              src="/images/Navbar/instagram.svg"
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
              src="/images/Navbar/fb-svg.svg"
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