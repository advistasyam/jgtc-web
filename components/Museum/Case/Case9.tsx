import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case9: React.FC = () => {
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
        tw="absolute top-[15%] left-[39%] transition duration-200 ease-in-out 
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
          src="/images/Museum/9/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <div
        tw="absolute top-[37%] left-[44%] transition duration-200 ease-in-out 
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
          src="/images/Museum/9/bottom.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 23%;
          `}
        />
      </div>
      <div
        tw="absolute top-[15%] left-[55%] transition duration-200 ease-in-out 
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
          src="/images/Museum/9/left.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 20%;
          `}
        />
      </div>
    </>
  )
}

export { Case9 }
