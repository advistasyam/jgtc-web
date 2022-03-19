import { css } from "twin.macro"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ReactPlayer from "react-player/youtube"
import { festivalData } from "./festivalData"
import { useState, useEffect } from "react"

const MainPage = () => {
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

  const [currentImage, setCurrentImage] = useState(
    Math.floor(Math.random() * 5)
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentImage === 4) {
        setCurrentImage(0)
      } else {
        setCurrentImage(currentImage + 1)
      }
    }, 4000)

    return () => clearInterval(intervalId)
  }, [currentImage])

  console.log(currentImage)

  return (
    <>
      <div tw="relative overflow-hidden">
        <div tw="mt-10 md:mt-24" ref={ref} />
        <div tw="flex items-center justify-center">
          <div tw="relative">
            <motion.h1
              tw="font-drukwide text-wheat font-bold text-xl sm:text-2xl md:text-5xl xl:text-6xl bg-orangejeruk px-3 md:px-6 py-1 md:py-2"
              initial={"initial"}
              animate={inView ? "animate" : "initial"}
              variants={wrapperVariants}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              FESTIVAL
            </motion.h1>
            <img
              src="/images/Festival/wings.png"
              alt=""
              tw="absolute right-[-60px] top-[-15px]"
              css={css`
                @media screen and (max-width: 767px) {
                  width: 30px;
                  right: -27px;
                  top: -5px;
                }
              `}
            />
            <img
              src="/images/Festival/wings.png"
              alt=""
              tw="absolute left-[-60px] top-[-15px] rotate-180"
              css={css`
                @media screen and (max-width: 767px) {
                  width: 30px;
                  left: -27px;
                  top: -5px;
                }
              `}
            />
          </div>
        </div>
        <div tw="mt-6 md:mt-12" />
        <div tw="container mx-auto">
          <div
            css={css`
              position: relative;
              padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
            `}
          >
            <ReactPlayer
              url={"https://youtu.be/xtnhmqd4URw"}
              controls={true}
              tw="absolute top-0 left-0"
              width="100%"
              height="100%"
            />
          </div>

          <div tw="flex items-center justify-center w-[100%]">
            <a
              tw="flex items-center justify-center mt-12"
              href={festivalData[currentImage].url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={festivalData[currentImage].src} alt="" tw="h-[250px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export { MainPage }
