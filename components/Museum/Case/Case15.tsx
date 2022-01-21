import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case15: React.FC = () => {
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
        tw="absolute top-[32%] left-[15%] transition duration-200 ease-in-out 
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
          src="/images/Museum/15/15_1.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 20%;
          `}
        />
      </div>
      <div
        tw="absolute top-[35%] left-[28%] transition duration-200 ease-in-out 
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
          src="/images/Museum/15/15_2.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <div
        tw="absolute top-[35%] left-[58%] transition duration-200 ease-in-out 
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
          src="/images/Museum/15/15_3.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 20%;
          `}
        />
      </div>
      <div
        tw="absolute top-[35%] left-[70%] transition duration-200 ease-in-out 
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
          src="/images/Museum/15/15_4.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 40%;
          `}
        />
      </div>
    </>
  )
}

export { Case15 }
