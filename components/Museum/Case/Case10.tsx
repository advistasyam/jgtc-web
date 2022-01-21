import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case10: React.FC = () => {
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
        tw="absolute top-[15%] left-[45%] transition duration-200 ease-in-out 
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
          src="/images/Museum/10/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 22%;
          `}
        />
      </div>
      <div
        tw="absolute top-[45%] left-[45%] transition duration-200 ease-in-out 
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
          src="/images/Museum/10/bottom.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 22%;
          `}
        />
      </div>
      <div
        tw="absolute top-[15%] left-[57%] transition duration-200 ease-in-out 
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
          src="/images/Museum/10/right.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 51%;
          `}
        />
      </div>
    </>
  )
}

export { Case10 }
