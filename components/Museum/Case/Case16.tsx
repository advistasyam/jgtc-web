import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case16: React.FC = () => {
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
        tw="absolute top-[30%] left-[24%] transition duration-200 ease-in-out 
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
          src="/images/Museum/16/16_1.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <div
        tw="absolute top-[30%] left-[43%] transition duration-200 ease-in-out 
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
          src="/images/Museum/16/16_2.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 25%;
          `}
        />
      </div>
      <div
        tw="absolute top-[30%] left-[60%] transition duration-200 ease-in-out 
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
          src="/images/Museum/16/16_3.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 37%;
          `}
        />
      </div>
      <a
        tw="absolute top-[63%] left-[65%] transition duration-200 ease-in-out 
            hover:-translate-y-4 cursor-pointer"
        href="https://open.spotify.com/playlist/0qQaM9xL3yTiKyiY6xO2oX?si=8e63aa684f5f455a&nd=1"
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          src="/images/Museum/16/play.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 5%;
          `}
        />
      </a>
    </>
  )
}

export { Case16 }
