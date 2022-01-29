import "twin.macro"
import React from "react"
import WidthImage from "@components/WidthImage/WidthImage"
import { ImageDecoration } from "./ImageDecoration"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRouter } from "next/router"

const CardSection: React.FC = () => {
  const router = useRouter()

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

  const goToPage1 = () => {
    router.push("/museum?q=birthofjazz")
  }

  const goToPage2 = () => {
    router.push("/museum?q=thejazzage")
  }

  const goToPage3 = () => {
    router.push("/museum?q=jazzdiaspora")
  }

  const goToPage4 = () => {
    router.push("/museum?q=jazzinindonesia")
  }

  return (
    <>
      <div tw="relative overflow-hidden">
        <div tw="mt-10 md:mt-24" ref={ref} />
        <motion.h1
          tw="font-drukwide text-wheat font-bold text-xl sm:text-2xl md:text-5xl xl:text-6xl text-center"
          initial={"initial"}
          animate={inView ? "animate" : "initial"}
          variants={wrapperVariants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          JGTC MUSEUM
        </motion.h1>
        <div tw="mt-6 md:mt-12" />
        <div tw="container mx-auto">
          <div tw="flex flex-row flex-wrap justify-center w-full">
            <div
              tw="mx-8 my-3 md:my-8 cursor-pointer transition duration-200 ease-in-out 
                  hover:-translate-y-4"
              onClick={goToPage1}
            >
              <WidthImage
                url="/images/Museum/thumbnail1.png"
                alt=""
                width="500"
                cssextend={`
                        div {
                          border-width: 8px;
                          border-color: #50713c;
                          border-radius: 0.375rem;
                          @media screen and (max-width: 1279px) {
                              width: 350px;
                          }
                          @media screen and (max-width: 767px) {
                              width: 100%;
                              border-width: 4px;
                          }
                        }
                    `}
              />
            </div>

            <div
              tw="mx-8 my-3 md:my-8 cursor-pointer transition duration-200 ease-in-out 
                  hover:-translate-y-4"
              onClick={goToPage2}
            >
              <WidthImage
                url="/images/Museum/thumbnail2.png"
                alt=""
                width="500"
                cssextend={`
                        div {
                          border-width: 8px;
                          border-color: #50713c;
                          border-radius: 0.375rem;
                          @media screen and (max-width: 1279px) {
                              width: 350px;
                          }
                          @media screen and (max-width: 767px) {
                              width: 100%;
                              border-width: 4px;
                          }
                        }
                    `}
              />
            </div>

            <div
              tw="mx-8 my-3 md:my-8 cursor-pointer transition duration-200 ease-in-out 
                  hover:-translate-y-4"
              onClick={goToPage3}
            >
              <WidthImage
                url="/images/Museum/thumbnail3.png"
                alt=""
                width="500"
                cssextend={`
                        div {
                          border-width: 8px;
                          border-color: #50713c;
                          border-radius: 0.375rem;
                          @media screen and (max-width: 1279px) {
                              width: 350px;
                          }
                          @media screen and (max-width: 767px) {
                              width: 100%;
                              border-width: 4px;
                          }
                        }
                    `}
              />
            </div>

            <div
              tw="mx-8 my-3 md:my-8 cursor-pointer transition duration-200 ease-in-out 
                  hover:-translate-y-4"
              onClick={goToPage4}
            >
              <WidthImage
                url="/images/Museum/thumbnail4.png"
                alt=""
                width="500"
                cssextend={`
                        div {
                          border-width: 8px;
                          border-color: #50713c;
                          border-radius: 0.375rem;
                          @media screen and (max-width: 1279px) {
                              width: 350px;
                          }
                          @media screen and (max-width: 767px) {
                              width: 100%;
                              border-width: 4px;
                          }
                        }
                    `}
              />
            </div>
          </div>
        </div>

        {/* Absolute Desktop Section */}
        <ImageDecoration />
      </div>
    </>
  )
}

export { CardSection }
