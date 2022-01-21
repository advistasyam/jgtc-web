import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case8: React.FC = () => {
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
        tw="absolute top-[15%] left-[50%] transition duration-200 ease-in-out 
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
          src="/images/Museum/8/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 38%;
          `}
        />
      </div>
      <div
        tw="absolute top-[37%] left-[50%] transition duration-200 ease-in-out 
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
          src="/images/Museum/8/left.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 20%;
          `}
        />
      </div>
      <div
        tw="absolute top-[37%] left-[61%] transition duration-200 ease-in-out 
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
          src="/images/Museum/8/right.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 24%;
          `}
        />
      </div>
    </>
  )
}

export { Case8 }
