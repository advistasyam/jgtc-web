import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import tw, { css } from "twin.macro"
// import { wrap } from "popmotion"
// import { images } from "./image-data"
import { CarouselImage } from "@components/Carousel/CarouselImage"

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const Carousel = ({ lineup }: any) => {
  const [[page, direction], setPage] = useState([0, 0])

  const isMobile = useMediaQuery({ query: "(max-width: 465px)" })

  const findIndex = (page: number) => {
    // Page = {0,1,2,....}
    // Output Needed = { 0 = 0-3, 1 = 4-7, ... }
    while (page < 0) {
      page += 12
    }
    const mod = page % 12
    return mod * 4
  }

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = findIndex(page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div
      tw="overflow-hidden flex items-center justify-center relative container mx-auto pt-0 md:pt-12"
      css={css`
        height: 300px;

        @media screen and (max-width: 767px) {
          height: 430px;
        }
      `}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          tw="absolute flex flex-wrap md:flex-nowrap items-center justify-center space-x-0 md:space-x-6 pb-6 md:pb-0"
          css={css`
            @media screen and (max-width: 470px) {
              height: 336px;
            }

            @media screen and (max-width: 320px) {
              height: unset !important:
              // width: 100%;
            }
          `}
          key={page}
          // src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <CarouselImage link={lineup[imageIndex]} />
          <CarouselImage link={lineup[imageIndex + 1]} />
          <CarouselImage link={lineup[!isMobile ? imageIndex + 2 : imageIndex + 3]} />
          <CarouselImage link={lineup[!isMobile ? imageIndex + 3 : imageIndex + 2]} />
        </motion.div>
      </AnimatePresence>
      <div
        onClick={() => paginate(-1)}
        tw="text-white absolute left-5 md:left-0 xl:left-10 text-4xl cursor-pointer hidden sm:block"
        css={css`
          z-index: 20;
        `}
      >
        &lt;
      </div>

      <div
        onClick={() => paginate(-1)}
        tw="text-white absolute left-5 md:left-0 xl:left-10 text-4xl cursor-pointer bottom-0 pb-2 px-3 mt-2 bg-white text-mainblack opacity-30 rounded-xl block sm:hidden"
        css={css`
          z-index: 20;
          left: 35%;
          -webkit-tap-highlight-color: transparent;
        `}
      >
        &lt;
      </div>

      <div
        onClick={() => paginate(1)}
        tw="text-white absolute right-5 md:right-0 xl:right-10 text-4xl cursor-pointer hidden sm:block"
        css={css`
          z-index: 20;
        `}
      >
        &gt;
      </div>

      <div
        onClick={() => paginate(1)}
        tw="text-white absolute right-5 md:right-0 xl:right-10 text-4xl cursor-pointer bottom-0 pb-2 px-3 mt-2 bg-white text-mainblack opacity-30 rounded-xl block sm:hidden"
        css={css`
          z-index: 20;
          right: 35%;
          -webkit-tap-highlight-color: transparent;
        `}
      >
        &gt;
      </div>
    </div>
  )
}
