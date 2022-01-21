import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"
import { images } from "@components/Museum/image-data"
import { css, styled } from "twin.macro"
import Image from "next/image"
import { Decoration } from "@components/Museum/Decoration"
import { useMediaQuery } from "react-responsive"
import Link from "next/link"

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

const NextButton = styled.div`
  .nextButton,
  .prevButton {
    top: calc(50% - 20px);
    position: absolute;
    background: #50713c;
    // color: "#c05328";
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }

  .nextButton {
    right: 10px;
  }

  .prevButton {
    left: 10px;
    transform: scale(-1);
  }

  @media screen and (max-width: 1000px) {
    .nextButton,
    .prevButton {
      width: 20px;
      height: 20px;
      font-size: 9px;
    }
  }
`

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

export default function Gambar() {
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    if (page + newDirection >= 0 && page + newDirection < images.length) {
      setPage([page + newDirection, newDirection])
    }
  }

  const isPhone = useMediaQuery({ query: "(max-width: 650px)" })

  return (
    <>
      {isPhone ? (
        <div tw="w-screen h-screen flex flex-col items-center justify-center bg-white space-y-4">
          <img src="/images/museum/rotate.png" alt="" />
          <h1>Rotate Your Phone to See JGTC Museum</h1>
          <h1>Open in PC for best experience</h1>
        </div>
      ) : (
        <NextButton tw="relative overflow-hidden">
          <Link href="/" passHref>
            <img src="/images/Museum/home.png" alt="" tw="absolute top-[50px] left-[50px] w-[50px] z-40 cursor-pointer" />
          </Link>
          <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
            <motion.div
              key={page}
              // src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.15 },
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
              tw="w-screen h-screen"
              css={css`
                img {
                  pointer-events: none;
                }
              `}
            >
              <Image
                src={images[imageIndex]}
                layout="fill"
                alt=""
                css={css`
                  object-fit: fill;

                  @media screen and (max-width: 1000px) {
                    object-fit: contain;
                  }
                `}
                // tw="object-fill"
                quality={100}
              />
            </motion.div>
          </AnimatePresence>
          {page < images.length - 1 && (
            <div
              onClick={() => paginate(1)}
              className="nextButton"
              tw="text-white"
            >
              &gt;
            </div>
          )}
          {page > 0 && (
            <div
              onClick={() => paginate(-1)}
              className="prevButton"
              tw="text-white"
            >
              &gt;
            </div>
          )}
          <Decoration page={page} />
        </NextButton>
      )}
    </>
  )
}
