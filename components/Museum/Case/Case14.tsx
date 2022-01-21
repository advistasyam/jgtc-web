import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case14: React.FC = () => {
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
        tw="absolute top-[30%] left-[7%] transition duration-200 ease-in-out 
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
          src="/images/Museum/14/left.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 40%;
          `}
        />
      </div>
      <div
        tw="absolute top-[31%] left-[71%] transition duration-200 ease-in-out 
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
          src="/images/Museum/14/right.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 70%;
          `}
        />
      </div>
    </>
  )
}

export { Case14 }
