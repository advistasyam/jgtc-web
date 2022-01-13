import React from "react"
import { css } from "twin.macro"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import HeightImage from "@components/HeightImage/HeightImage"

const SponsorSection: React.FC = () => {
  const wrapperVariants = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      x: 100,
    },
    animate: {
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
    <div tw="relative mt-[50px] md:pt-section overflow-x-hidden">
      <img
        src="/images/Landing/sponsorpage/sponsor_img.png"
        alt=""
        tw="absolute left-0 w-[90px] md:w-[300px] z-10"
        css={css`
          top: -70px;

          @media screen and (max-width: 767px) {
            top: -20px;
          }
        `}
      />
      <img
        src="/images/Landing/sponsorpage/sponsor_img_flip.png"
        alt=""
        tw="absolute right-0 w-[90px] md:w-[300px] z-10"
        css={css`
          top: -70px;

          @media screen and (max-width: 767px) {
            top: -20px;
          }
        `}
      />
      <div tw="container mx-auto pt-12" ref={ref}>
        <motion.h1
          tw="text-orangejeruk text-center text-3xl md:text-6xl font-drukwide"
          initial={"initial"}
          animate={inView ? "animate" : "initial"}
          variants={wrapperVariants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          SPONSORS
        </motion.h1>
        <div tw="flex flex-wrap items-center justify-center mt-10">
          <HeightImage
            url="/images/Landing/sponsorpage/indihome.png"
            height="170"
            cssextend={`
              margin: 30px;

              @media screen and (max-width: 767px) {
                margin: 15px;
                padding-left: 5px;
                padding-right: 5px;

                div {
                  height: 90px;
                }
              }
            `}
          />
          <HeightImage
            url="/images/Landing/sponsorpage/bni.png"
            height="170"
            cssextend={`
              margin: 30px;

              @media screen and (max-width: 767px) {
                margin: 15px;
                padding-left: 5px;
                padding-right: 5px;

                div {
                  height: 90px;
                }
              }
            `}
          />
          <HeightImage
            url="/images/Landing/sponsorpage/iluni_2.png"
            height="150"
            cssextend={`
              margin: 30px;

              @media screen and (max-width: 767px) {
                margin: 15px;
                padding-left: 5px;
                padding-right: 5px;

                div {
                  height: 75px;
                }
              }
            `}
          />
          <HeightImage
            url="/images/Landing/sponsorpage/geut.png"
            height="85"
            cssextend={`
              margin: 30px;

              @media screen and (max-width: 767px) {
                margin: 15px;
                padding-left: 5px;
                padding-right: 5px;

                div {
                  height: 50px;
                }
              }
            `}
          />
          <HeightImage
            url="/images/Landing/sponsorpage/studio_katsu.png"
            height="85"
            cssextend={`
              margin: 30px;

              @media screen and (max-width: 767px) {
                margin: 15px;
                padding-left: 5px;
                padding-right: 5px;

                div {
                  height: 50px;
                }
              }
            `}
          />
          <HeightImage
            url="/images/Landing/sponsorpage/socmedical.png"
            height="85"
            cssextend={`
              margin: 30px;

              @media screen and (max-width: 767px) {
                margin: 15px;
                padding-left: 5px;
                padding-right: 5px;

                div {
                  height: 50px;
                }
              }
            `}
          />
        </div>
      </div>
    </div>
  )
}

export { SponsorSection }
