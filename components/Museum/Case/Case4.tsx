import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case4: React.FC = () => {
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
        tw="absolute top-[0%] left-[23%] transition duration-200 ease-in-out 
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
          src="/images/Museum/4/bottom.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 28%;
          `}
        />
      </div>
      <div
        tw="absolute top-[0%] left-[10%] transition duration-200 ease-in-out 
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
          src="/images/Museum/4/center.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 28%;
          `}
        />
      </div>
      <div
        tw="absolute top-[5%] left-[23%] transition duration-200 ease-in-out 
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
          src="/images/Museum/4/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 28%;
          `}
        />
      </div>
    </>
  )
}

export { Case4 }
