import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case23: React.FC = () => {
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
        tw="absolute bottom-[4%] left-[16%] transition duration-200 ease-in-out 
            hover:-translate-y-12"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          src="/images/Museum/23/up.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 40%;
          `}
        />
      </div>
    </>
  )
}

export { Case23 }
