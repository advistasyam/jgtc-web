import React, { useState } from "react"
import Link from "next/link"
import tw, { css } from "twin.macro"
import { SocialMedia } from "./SocialMedia"
import WidthImage from "@components/WidthImage/WidthImage"
import { Nav, HamburgerStyle, MenuPrograms } from "./Styles"
import { motion } from "framer-motion"
import {
  menuVariants,
  programsArrowButton,
  programsMenuVariants
} from "@components/Navbar/FramerUtilities"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPrograms, setIsOpenPrograms] = useState(false)

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
        <div tw="flex flex-row items-center space-x-6 lg:space-x-20">
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
          <div tw="hidden md:block">
            <Link href="/" passHref>
              <p tw="text-white cursor-pointer">HOME</p>
            </Link>
          </div>
          <div
            tw="hidden md:flex flex-row cursor-pointer relative"
            onClick={() => {
              setIsOpenPrograms(!isOpenPrograms)
            }}
          >
            <div tw="flex flex-row space-x-3">
              <p tw="text-white">PROGRAMS</p>
              <motion.img
                src="/images/Navbar/arrowDown.svg"
                alt=""
                style={{ width: "15px" }}
                initial={false}
                variants={programsArrowButton}
                animate={isOpenPrograms ? "opened" : "closed"}
              />
            </div>

            <MenuPrograms 
              tw="rounded-b-xl"
              initial={false}
              variants={programsMenuVariants}
              animate={isOpenPrograms ? "opened" : "closed"}
            >
              <div tw="p-5 transform translate-y-[-500px]" css={isOpenPrograms && tw`translate-y-0`}>
                <div
                  tw="bg-white w-full"
                  css={css`
                    height: 1px;
                  `}
                />
                <Link href="/jgtcshowcase" passHref>
                  <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
                    JGTC Showcase
                  </p>
                </Link>
                <div
                  tw="bg-white w-full opacity-50"
                  css={css`
                    height: 0.7px;
                  `}
                />
                <Link href="/" passHref>
                  <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
                    COMING SOON
                  </p>
                </Link>
                <div
                  tw="bg-white w-full opacity-50"
                  css={css`
                    height: 0.7px;
                  `}
                />
                <Link href="/" passHref>
                  <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
                    COMING SOON
                  </p>
                </Link>
                <div
                  tw="bg-white w-full opacity-50"
                  css={css`
                    height: 0.7px;
                  `}
                />
                <div
                  tw="bg-white w-full"
                  css={css`
                    height: 1px;
                  `}
                />
              </div>
            </MenuPrograms>
          </div>
        </div>

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

      {/* Mobile Version */}
      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        tw="rounded-b-3xl shadow-2xl"
      >
        <div
          css={css`
            padding-top: 60px;
          `}
          tw="pl-5 pr-7"
        >
          <div
            tw="bg-white w-full"
            css={css`
              height: 1px;
            `}
          />
          <Link href="/" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">HOME</p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/jgtcshowcase" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              JGTC Showcase
            </p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              COMING SOON
            </p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              COMING SOON
            </p>
          </Link>
          <div
            tw="bg-white w-full"
            css={css`
              height: 1px;
            `}
          />
        </div>
      </Nav>
    </>
  )
}

export { Navbar }
