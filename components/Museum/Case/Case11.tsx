import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case11: React.FC = () => {
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
        tw="absolute top-[17%] left-[33%] transition duration-200 ease-in-out 
            hover:-translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          src="/images/Museum/11/left.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 28%;
          `}
        />
      </div>
      <div
        tw="absolute top-[15%] left-[48%] transition duration-200 ease-in-out 
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
          src="/images/Museum/11/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 20%;
          `}
        />
      </div>
      <div
        tw="absolute top-[38%] left-[48%] transition duration-200 ease-in-out 
            hover:-translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          src="/images/Museum/11/down.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 20%;
          `}
        />
      </div>
      <div
        tw="absolute top-[17%] left-[59%] transition duration-200 ease-in-out 
            hover:-translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          src="/images/Museum/11/right.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 35%;
          `}
        />
      </div>
    </>
  )
}

export { Case11 }
