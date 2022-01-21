import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case17: React.FC = () => {
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
        tw="absolute top-[33%] left-[17%] transition duration-200 ease-in-out 
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
          src="/images/Museum/17/17_1.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 16%;
          `}
        />
      </div>
      <div
        tw="absolute top-[34%] left-[28%] transition duration-200 ease-in-out 
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
          src="/images/Museum/17/17_2.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 27%;
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
          src="/images/Museum/17/17_3.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 21%;
          `}
        />
      </div>
      <div
        tw="absolute top-[36%] left-[69%] transition duration-200 ease-in-out 
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
          src="/images/Museum/17/17_4.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 49%;
          `}
        />
      </div>
    </>
  )
}

export { Case17 }
