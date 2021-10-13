import React, { useState } from "react"
import Link from "next/link"
import { css } from "twin.macro"
import { SocialMedia } from "./SocialMedia"
import WidthImage from "@components/WidthImage/WidthImage"
import { Nav, HamburgerStyle } from "./Styles"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  }

  return (
    <>
      <div
        tw="bg-mainblack flex items-center justify-between fixed top-0 z-20 w-screen"
        css={css`
          height: 80px;
          padding-left: 60px;
          padding-right: 80px;

          @media screen and (max-width: 767px) {
            height: 50px;
            padding-left: 10px;
            padding-right: 20px;
          }
        `}
      >
        <Link href="/" passHref>
          <WidthImage
            url="/images/Navbar/NavSvg.svg"
            alt="Navbar Logo"
            width="80"
            cssextend={`
          div {
            position: unset !important;
            width: 80px;
          }

          @media screen and (max-width: 767px) {
            div {
              position: unset !important;
              width: 50px;
            }
          }
          `}
            tw="cursor-pointer"
          />
        </Link>

        <SocialMedia />

        <div
          css={css`
            ${HamburgerStyle}
          `}
          tw="block md:hidden"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <div id="nav-icon1" className={isOpen ? "openHamburgerButton" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        tw="rounded-b-3xl"
      >
        <div
          css={css`
            padding-top: 60px;
          `}
          tw="pl-5 pr-7"
        >
          <div tw="bg-white w-full" css={css`height: 1px;`} />
          <Link href="/" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">HOME</p>
          </Link>
          <div tw="bg-white w-full opacity-50" css={css`height: 0.7px;`} />
          <Link href="/" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">PROGRAM</p>
          </Link>
          <div tw="bg-white w-full opacity-50" css={css`height: 0.7px;`} />
          <Link href="/" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">PARTNERS</p>
          </Link>
          <div tw="bg-white w-full opacity-50" css={css`height: 0.7px;`} />
          <Link href="/" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">ABOUT</p>
          </Link>
          <div tw="bg-white w-full" css={css`height: 1px;`} />
        </div>
      </Nav>
    </>
  )
}

export { Navbar }
