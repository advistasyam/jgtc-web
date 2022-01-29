import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case31: React.FC = () => {
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
      <a
        tw="absolute top-[5%] left-[41%] transition duration-200 ease-in-out 
            hover:-translate-y-4"
        href="https://open.spotify.com/playlist/2ELYG6JW0446mAJO4uNEXv?si=e14438e34ba94a5d "
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          src="/images/Museum/31/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 35%;
          `}
        />
      </a>
      <a
        tw="absolute top-[56%] left-[36%] transition duration-200 ease-in-out 
            hover:-translate-y-4"
        href="https://open.spotify.com/playlist/5Odc2CazIA2N1pXPWnJTAV?si=180365dbbc4742e5 "
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
          src="/images/Museum/31/down.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 50%;
          `}
        />
      </a>
    </>
  )
}

export { Case31 }
