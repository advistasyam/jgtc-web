import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case6: React.FC = () => {
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
        tw="absolute top-[20%] left-[20%] transition duration-200 ease-in-out 
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
          src="/images/Museum/6/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <div
        tw="absolute top-[52%] left-[28%] transition duration-200 ease-in-out 
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
          src="/images/Museum/6/down.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
    </>
  )
}

export { Case6 }
