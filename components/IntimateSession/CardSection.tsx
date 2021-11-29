import "twin.macro"
import React, { useState } from "react"
import WidthImage from "@components/WidthImage/WidthImage"
import { Modals } from "./Modals"
import { IntimateSessionData } from "./IntimateSessionData"
import { ImageDecoration } from "./ImageDecoration"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
          tw="font-drukwide text-darkblue font-bold text-xl sm:text-2xl md:text-5xl xl:text-6xl text-center"
          initial={"initial"}
          animate={inView ? "animate" : "initial"}
          variants={wrapperVariants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          INTIMATE SESSION
        </motion.h1>
        <div tw="mt-6 md:mt-12" />
        <div tw="container mx-auto">
          <div tw="flex flex-row flex-wrap justify-center w-full">
            {IntimateSessionData.map((val, index) => {
              return (
                <div
                  key={index}
                  tw="mx-8 my-3 md:my-8 cursor-pointer transition duration-200 ease-in-out 
                  hover:-translate-y-4"
                  onClick={() => {
                    openModal()
                    setIndexModal(index)
                  }}
                >
                  <WidthImage
                    url={val.url}
                    alt={val.alt}
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
              )
            })}
          </div>
        </div>

        {/* Absolute Desktop Section */}
        <ImageDecoration />
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
