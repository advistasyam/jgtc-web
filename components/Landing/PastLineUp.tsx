import "twin.macro"
import React from "react"
import { Example } from "@components/Carousel/Carousel"
import { Lineup } from "@components/Landing/lineup"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const PastLineUp: React.FC = () => {

  const wrapperVariants = {
    initial: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      x: 100
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      x: 0
    },
    initialBawah: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      x: -100
    },
    animateBawah: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      x: 0
    },
  }

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div tw="bg-mainblack mt-24 md:mt-48 overflow-x-hidden" ref={ref}>
      <motion.h1 tw="font-drukwide text-darkblue text-2xl md:text-6xl text-center"
        initial={"initial"}
        animate={inView ? "animate" : "initial"}
        variants={wrapperVariants}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        PAST LINE UP
      </motion.h1>
      <motion.h2 tw="text-wheat font-druk text-xl md:text-3xl text-center m-1 md:m-2"
        initial={"initialBawah"}
        animate={inView ? "animateBawah" : "initialBawah"}
        variants={wrapperVariants}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      >
        Reminiscing musicians from previous Jazz Goes to Campus Festivals
      </motion.h2>

      <Example lineup={Lineup} />
    </div>
  )
}

export { PastLineUp }
