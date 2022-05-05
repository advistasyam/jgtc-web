import "twin.macro"
import React, { useState } from "react"
import WidthImage from "@components/WidthImage/WidthImage"
import { Modals } from "@components/Jots/Modals"
import { ImageDecoration } from "@components/Partners/ImageDecoration"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SponsorsData } from "./SponsorsData"
import { MediaData } from "./MediaData"
import { Decoration2 } from "./Decoration2"

const CardSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [indexModal, setIndexModal] = useState(0)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const wrapperVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      x: 100,
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      x: 0,
    },
    initialBawah: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      x: -100,
    },
    animateBawah: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      x: 0,
    },
  }

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      <div tw="relative overflow-hidden">
        <div tw="mt-10 md:mt-24" ref={ref} />
        <motion.h1
          tw="font-drukwide text-orangejeruk font-bold text-xl sm:text-2xl md:text-5xl xl:text-6xl text-center"
          initial={"initial"}
          animate={inView ? "animate" : "initial"}
          variants={wrapperVariants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          SPONSORS
        </motion.h1>
        <div tw="mt-6 md:mt-12" />
        <div tw="container mx-auto">
          <WidthImage
            url="/images/Partners/Sponsors/tokocrypto.png"
            alt=""
            width="250"
            cssextend={`
                            div {
                                @media screen and (max-width: 1279px) {
                                    width: 250px;
                                }
                                @media screen and (max-width: 767px) {
                                    width: 50%;
                                }
                            }
                            margin: 20px;

                            @media screen and (max-width: 767px) {
                                margin: 15px;
                            }

                            display: flex;
                            justify-content: center;
                            align-items: center;
                        `}
          />
          <div tw="flex flex-row flex-wrap justify-center w-full">
            {SponsorsData.map((val, index) => {
              return (
                <WidthImage
                  key={index}
                  url={val}
                  alt=""
                  width="250"
                  cssextend={`
                            div {
                                @media screen and (max-width: 1279px) {
                                    width: 250px;
                                }
                                @media screen and (max-width: 767px) {
                                    width: 100%;
                                }
                            }
                            margin: 20px;

                            @media screen and (max-width: 767px) {
                                margin: 15px;
                                flex: 29%;
                            }
                        `}
                />
              )
            })}
          </div>
        </div>
        {/* Absolute Desktop Section */}
        <ImageDecoration />

        <div tw="container mx-auto mt-12 flex flex-col space-y-2 justify-center items-center text-white text-lg md:text-3xl">
          <p tw="text-base md:text-xl">For partnership please contact:</p>
          <p>sponsorship.jgtc@gmail.com</p>
          <p>or</p>
          <p>executive@jgtc-festival.com</p>
        </div>
      </div>

      <div tw="relative overflow-hidden">
        <h1 tw="font-drukwide text-darkblue font-bold text-xl sm:text-2xl md:text-5xl xl:text-6xl text-center mt-48">
          MEDIA PARTNER
        </h1>
        <div tw="mt-6 md:mt-12" />

        <div tw="container mx-auto">
          <WidthImage
            url="/images/Partners/Media/prambors.png"
            alt=""
            width="250"
            cssextend={`
                            div {
                                @media screen and (max-width: 1279px) {
                                    width: 250px;
                                }
                                @media screen and (max-width: 767px) {
                                    width: 50%;
                                }
                            }
                            margin: 20px;

                            @media screen and (max-width: 767px) {
                                margin: 10px;
                            }

                            display: flex;
                            justify-content: center;
                            align-items: center;
                        `}
          />
          <div tw="flex flex-row flex-wrap justify-center w-full">
            {MediaData.map((val, index) => {
              return (
                <WidthImage
                  key={index}
                  url={val}
                  alt=""
                  width="250"
                  cssextend={`
                            div {
                                @media screen and (max-width: 1279px) {
                                    width: 250px;
                                }
                                @media screen and (max-width: 767px) {
                                    width: 100%;
                                }
                            }
                            margin: 20px;

                            @media screen and (max-width: 767px) {
                                margin: 15px;
                                flex: 29%;
                            }
                        `}
                />
              )
            })}
          </div>
        </div>

        <div tw="container mx-auto mt-12 flex flex-col space-y-2 justify-center items-center text-white text-lg md:text-3xl">
          <p tw="text-base md:text-xl">For partnership please contact:</p>
          <p>publication.jgtc@gmail.com</p>
          <p>or</p>
          <p>executive@jgtc-festival.com</p>
        </div>

        <Decoration2 />
      </div>

      <Modals
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        indexModal={indexModal}
      />
    </>
  )
}

export { CardSection }
