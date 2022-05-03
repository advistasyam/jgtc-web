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
  programsMenuVariants,
} from "@components/Navbar/FramerUtilities"
import { useRouter } from "next/router"
import Image from "next/image"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPrograms, setIsOpenPrograms] = useState(false)
  const { pathname } = useRouter()

  if (pathname.includes("museumhall")) {
    return <></>
  }

  return (
    <>
      <div
        tw="bg-mainblack flex items-center justify-between fixed top-0 z-[100] w-screen"
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
            <div tw="cursor-pointer">
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
            </div>
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
              <div
                tw="p-5 transform translate-y-[-500px]"
                css={isOpenPrograms && tw`translate-y-0`}
              >
                <div
                  tw="bg-white w-full"
                  css={css`
                    height: 1px;
                  `}
                />
                <Link href="/showcase" passHref>
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
                <Link href="/jots" passHref>
                  <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
                    Jazz On The Sofa
                  </p>
                </Link>
                <div
                  tw="bg-white w-full opacity-50"
                  css={css`
                    height: 0.7px;
                  `}
                />
                <Link href="/intimatesession" passHref>
                  <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
                    Intimate Session
                  </p>
                </Link>
                <div
                  tw="bg-white w-full opacity-50"
                  css={css`
                    height: 0.7px;
                  `}
                />
                <Link href="/communitysession" passHref>
                  <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
                    Community Session
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
          <div tw="hidden md:block">
            <Link href="/museum" passHref>
              <p tw="text-white cursor-pointer">MUSEUM</p>
            </Link>
          </div>
          <div tw="hidden md:block">
            <Link href="/partners" passHref>
              <p tw="text-white cursor-pointer">PARTNERS</p>
            </Link>
          </div>
          <div tw="hidden md:block">
            <Link href="/about" passHref>
              <p tw="text-white cursor-pointer">ABOUT</p>
            </Link>
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
          onClick={() => {
            setIsOpen(!isOpen)
          }}
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
          <Link href="/showcase" passHref>
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
          <Link href="/jots" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              Jazz On The Sofa
            </p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/intimatesession" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              Intimate Session
            </p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/communitysession" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              Community Session
            </p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/museum" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              Museum
            </p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/partners" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              Partners
            </p>
          </Link>
          <div
            tw="bg-white w-full opacity-50"
            css={css`
              height: 0.7px;
            `}
          />
          <Link href="/about" passHref>
            <p tw="text-white text-left py-2 pl-2 font-condensedmedium">
              About
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

      {/* Mobile Version */}
      <div
        tw="block md:hidden fixed left-2 z-[50]"
        css={css`
          top: 40%;
        `}
      >
        <div tw="relative z-20">
          <div tw="flex flex-col space-y-2">
            <a
              href="https://youtube.com/JGTCofficial"
              target="_blank"
              rel="noreferrer"
              css={css`
                div {
                  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -moz-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -o-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  border-radius: 25px;
                }
              `}
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
              css={css`
                div {
                  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -moz-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -o-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  border-radius: 25px;
                }
              `}
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
              css={css`
                div {
                  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -moz-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -o-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  border-radius: 25px;
                }
              `}
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
              css={css`
                div {
                  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -moz-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  -o-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
                  border-radius: 25px;
                }
              `}
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
      </div>
    </>
  )
}

export { Navbar }
