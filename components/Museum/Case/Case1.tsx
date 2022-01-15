import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case1: React.FC = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    finish: {
      opacity: 1,
    },
  }

  return (
    <>
      <div
        tw="absolute top-[15%] left-[20%] transition duration-200 ease-in-out 
            hover:-translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
          src="/images/Museum/1/left_up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 35%;
          `}
        />
      </div>
      <div
        tw="absolute top-[45%] left-[22%] transition duration-200 ease-in-out 
            hover:-translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          src="/images/Museum/1/left_bottom.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <a
        tw="absolute top-[27%] right-[-22%] transition duration-200 ease-in-out 
            hover:-translate-y-4 cursor-pointer"
        href="https://open.spotify.com/playlist/2Xc5KlRz9Zrxu5ivDdEcFu?si=USlK-6g4TYq6geDouWvEow&utm_source=copy-link&nd=1"
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          src="/images/Museum/1/right.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 40%;
          `}
        />
      </a>
    </>
  )
}

export { Case1 }
