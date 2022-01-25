import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case22: React.FC = () => {
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
        tw="absolute top-[48%] left-[39%] transition duration-200 ease-in-out 
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
          src="/images/Museum/22/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 42%;
          `}
        />
      </div>
    </>
  )
}

export { Case22 }
