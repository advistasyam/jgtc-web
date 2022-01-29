import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case33: React.FC = () => {
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
        tw="absolute top-[9%] left-[14%] transition duration-200 ease-in-out 
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
          src="/images/Museum/33/1.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <div
        tw="absolute top-[9%] left-[58%] transition duration-200 ease-in-out 
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
          src="/images/Museum/33/2.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 39%;
          `}
        />
      </div>
      <div
        tw="absolute top-[44%] left-[14%] transition duration-200 ease-in-out 
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
          src="/images/Museum/33/3.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <div
        tw="absolute top-[42%] left-[58%] transition duration-200 ease-in-out 
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
          src="/images/Museum/33/4.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 39%;
          `}
        />
      </div>
      <div
        tw="absolute top-[70%] left-[75.5%] transition duration-200 ease-in-out 
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
          src="/images/Museum/33/radio.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 22%;
          `}
        />
      </div>
    </>
  )
}

export { Case33 }
