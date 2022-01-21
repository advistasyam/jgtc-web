import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case13: React.FC = () => {
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
        tw="absolute top-[26%] left-[5%] transition duration-200 ease-in-out 
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
          src="/images/Museum/13/left.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 43%;
          `}
        />
      </div>
      <div
        tw="absolute top-[28%] left-[45%] transition duration-200 ease-in-out 
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
          src="/images/Museum/13/right.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 65%;
          `}
        />
      </div>
    </>
  )
}

export { Case13 }
