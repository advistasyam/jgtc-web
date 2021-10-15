import { css } from "twin.macro"
import React from "react"
import HeightImage from "@components/HeightImage/HeightImage"
import { useViewportScroll, useTransform, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Kitabisa: React.FC = () => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 1080], [100, 300])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 50,
    },
  }

  const buttonDonasi = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 250,
    },
  }

  const imageIluni = {
    visible: { x: 0 },
    hidden: {
      x: -250
    },
  }

  const imageNakes = {
    visible: { x: 0 },
    hidden: {
      x: 250
    },
  }

  const imageNakesDesktop = {
    visible: { x: 0 },
    hidden: {
      x: 800
    },
  }

  return (
    <div tw="bg-mainblack relative mt-24 overflow-hidden">
      <div tw="absolute top-0 left-0">
        <HeightImage
          url="/images/Footer/LOGO.png"
          height="215"
          alt="JGTC Logo"
          cssextend={`
            @media screen and (max-width: 1279px) {
              object-fit: contain;
              div {
                position: unset !important;
                height: 150px;
              }
            }

            @media screen and (max-width: 767px) {
              display: none;
            }
            `}
        />
      </div>
      <div tw="absolute right-0 h-full">
        <div tw="flex items-center justify-end h-full">
          <motion.img
            src="/images/Landing/sponsorpage/RightSide.png"
            alt="gambar"
            tw="hidden md:block h-3/4 xl:h-full"
            initial={"hidden"}
            animate={inView ? "visible" : "hidden"}
            variants={imageNakesDesktop}
            transition={{ duration: 1, ease: "easeOut", delay: 3.5 }}
          />
        </div>
      </div>
      <motion.div
        tw="absolute"
        css={css`
          left: -10%;
          bottom: ${`${y1}`}%;
        `}
        style={{ y: y1 }}
      >
        <HeightImage
          url="/images/Landing/sponsorpage/left-sapi.png"
          height="450"
          alt="decoration"
          cssextend={`
            @media screen and (max-width: 1279px) {
              object-fit: contain;
              div {
                position: unset !important;
                height: 275px;
              }
            }

            @media screen and (max-width: 767px) {
              display: none
            }
            `}
        />
      </motion.div>
      <div tw="mt-12" ref={ref} />
      <motion.h1
        tw="font-drukwide font-bold text-6xl xl:text-9xl text-orangejeruk text-center"
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        JGTC
      </motion.h1>
      <motion.h2
        tw="font-drukwide font-bold text-xl md:text-3xl xl:text-6xl text-darkblue mt-0 md:mt-3 text-center"
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        #Peduli<span tw="text-olivegreen">Sesama</span>
      </motion.h2>
      <motion.h3
        tw="text-wheat text-lg md:text-xl xl:text-3xl font-futura mt-2 md:mt-3 text-center"
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
      >
        Bersama pulih dari COVID-19
      </motion.h3>
      <motion.h3
        tw="text-wheat text-base md:text-lg xl:text-3xl font-condensedmedium mt-6 text-center"
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
      >
        Ulurkan Tanganmu Bantu Tenaga Kesehatan dan Masyarakat <br /> Terdampak
        COVID-19
      </motion.h3>
      <motion.div tw="flex items-center justify-center mt-6 md:mt-12"
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={buttonDonasi}
        transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
      >
        <a
          tw="text-wheat px-7 md:px-10 py-1 md:py-3 text-lg md:text-2xl xl:text-4xl bg-darkblue rounded-xl md:rounded-full font-futura"
          href="https://kitabisa.com/campaign/jgtcpedulisesama"
          target="_blank"
          rel="noreferrer"
          css={css`
            transition: transform 0.2s;
            :hover {
              transform: scale(1.1);
            }
          `}
        >
          DONASI SEKARANG
        </a>
      </motion.div>

      <div tw="flex items-start justify-between md:justify-center mt-12 overflow-x-hidden">
        <div>
          <p tw="text-left md:text-center font-condensedmedium text-white text-xs md:text-lg xl:text-3xl text-wheat pl-4 md:pl-0">
            Saksikan <span tw="text-orangejeruk">JGTC Showcase</span>,{" "}
            <span tw="text-darkblue">Jazz on the Sofa</span>, <br />
            <span tw="text-olivegreen">Intimate Session</span>, dan{" "}
            <span tw="text-orangejeruk">Community Session</span> <br />
            setiap minggunya hanya di
          </p>
          <div tw="flex items-center justify-start md:justify-center mt-4 md:mt-12 pl-4 md:pl-0">
            <a
              href="https://www.youtube.com/user/JGTCofficial/featured"
              target="_blank"
              rel="noreferrer"
              tw="flex items-center"
            >
              <HeightImage
                url="/images/Landing/sponsorpage/yt.png"
                height="44"
                cssextend={`
            @media screen and (max-width: 1279px) {
              object-fit: contain;
              div {
                position: unset !important;
                height: 30px;
              }
            }

            @media screen and (max-width: 767px) {
              object-fit: contain;
              div {
                position: unset !important;
                height: 10px;
              }
            }
            `}
              />
              <h1 tw="text-wheat font-futura text-xs md:text-base">
                Jazz Goes To Campus
              </h1>
            </a>
          </div>
          <motion.img
            src="/images/Landing/sponsorpage/Iluni.png"
            alt="iluni"
            css={css`
              height: 120px;
            `}
            tw="block md:hidden mt-2 pl-4"
            initial={"hidden"}
            animate={inView ? "visible" : "hidden"}
            variants={imageIluni}
            transition={{ duration: 1, ease: "easeOut", delay: 2.8 }}
          />
        </div>

        <motion.img
          src="/images/Landing/sponsorpage/3photo.png"
          alt="3photo"
          css={css`
            width: 120px;
          `}
          tw="block md:hidden"
          initial={"hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={imageNakes}
          transition={{ duration: 1, ease: "easeOut", delay: 2.8 }}
        />
      </div>
    </div>
  )
}

export { Kitabisa }
