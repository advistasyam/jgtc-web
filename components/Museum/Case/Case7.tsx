import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case7: React.FC = () => {
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
        tw="absolute top-[8%] left-[42%] transition duration-200 ease-in-out 
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
          src="/images/Museum/7/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </div>
      <a
        tw="absolute top-[32%] left-[40%] transition duration-200 ease-in-out 
            hover:-translate-y-4 cursor-pointer"
        href="https://open.spotify.com/playlist/4KfVyXIF4tQPPz2jN9jZ1x?si=a6d8ba0071e24b56&nd=1"
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          src="/images/Museum/7/down.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 30%;
          `}
        />
      </a>
    </>
  )
}

export { Case7 }
