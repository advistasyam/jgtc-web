import React from "react"
import { css } from "twin.macro"
import { motion } from "framer-motion"

const Case29: React.FC = () => {
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
        tw="absolute top-[20%] left-[14%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          src="/images/Museum/29/1.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 5%;
          `}
        />
      </div>
      <div
        tw="absolute top-[10.5%] left-[22.5%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          src="/images/Museum/29/2.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 5%;
          `}
        />
      </div>
      <div
        tw="absolute top-[4.5%] left-[31%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          src="/images/Museum/29/3.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 5%;
          `}
        />
      </div>
      <div
        tw="absolute top-[1%] left-[39.5%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          src="/images/Museum/29/4.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 5%;
          `}
        />
      </div>
      <div
        tw="absolute top-[0%] left-[47.5%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 2.5,
          }}
          src="/images/Museum/29/5.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 5%;
          `}
        />
      </div>
      <div
        tw="absolute top-[0.5%] left-[56%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 3,
          }}
          src="/images/Museum/29/6.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 5%;
          `}
        />
      </div>
      <div
        tw="absolute top-[3.3%] left-[64.5%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 3.5,
          }}
          src="/images/Museum/29/7.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 6.2%;
          `}
        />
      </div>
      <div
        tw="absolute top-[8.7%] left-[73%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 4,
          }}
          src="/images/Museum/29/8.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 8%;
          `}
        />
      </div>
      <div
        tw="absolute top-[17%] left-[81.4%] transition duration-200 ease-in-out 
            hover:translate-y-4"
      >
        <motion.img
          variants={variants}
          initial="initial"
          animate="finish"
          transition={{
            duration: 0.5,
            delay: 4.5,
          }}
          src="/images/Museum/29/9.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 12%;
          `}
        />
      </div>
      <a
        tw="absolute bottom-[10%] left-[6%] transition duration-200 ease-in-out 
            hover:-translate-y-8 cursor-pointer"
        href="https://open.spotify.com/playlist/6yp4JrTTED0h1JoghpCiPq?si=9393902cf26c43a2"
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
          src="/images/Museum/29/spotify.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 12%;
          `}
        />
      </a>
      <a
        tw="absolute bottom-[10%] left-[14%] transition duration-200 ease-in-out 
            hover:-translate-y-8 cursor-pointer"
        href="https://youtube.com/playlist?list=PLQdJJo-bGIWIVdeamzP3ZWqqeJ6J_aQbm"
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
          src="/images/Museum/29/yt.png"
          alt=""
          css={css`
            width: calc(100vw - 100vh);
            max-width: 12%;
          `}
        />
      </a>
    </>
  )
}

export { Case29 }
