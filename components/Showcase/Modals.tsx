import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { css, cx } from "@emotion/css"
import { ShowcaseData } from "./ShowcaseData"
import tw from "twin.macro"
import ReactPlayer from "react-player/youtube"

interface ModalsProps {
  isOpen: boolean
  closeModal(): void
  openModal(): void
}

const Modals: React.FC<ModalsProps> = ({ isOpen, closeModal, openModal }) => {
  return (
    <>
      {/* @ts-ignore */}
      <Transition appear show={isOpen} as={Fragment}>
        {/* @ts-ignore */}
        <Dialog
          as="div"
          tw="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div tw="h-screen px-4 text-center flex items-center justify-center">
            {/* @ts-ignore */}
            <Transition.Child
              as={Fragment}
              enter={cx(css(tw`ease-out duration-300`))}
              enterFrom={cx(css(tw`opacity-0`))}
              enterTo={cx(css(tw`opacity-50`))}
              leave={cx(css(tw`ease-in duration-200`))}
              leaveFrom={cx(css(tw`opacity-50`))}
              leaveTo={cx(css(tw`opacity-0`))}
            >
              <Dialog.Overlay
                tw="fixed inset-0 bg-black opacity-50"
                css={css`
                  z-index: -10;
                `}
              />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            {/* <span tw="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span> */}
            {/* @ts-ignore */}
            <Transition.Child
              as={Fragment}
              enter={cx(css(tw`ease-out duration-300`))}
              enterFrom={cx(css(tw`opacity-0 scale-95`))}
              enterTo={cx(css(tw`opacity-100 scale-100`))}
              leave={cx(css(tw`ease-in duration-200`))}
              leaveFrom={cx(css(tw`opacity-100 scale-100`))}
              leaveTo={cx(css(tw`opacity-0 scale-95`))}
            >
              <div tw="w-[855px] mx-auto flex flex-col p-6 my-8 overflow-x-hidden text-left align-middle transition-all transform bg-wheat shadow-xl relative h-3/4 rounded-xl">
                <Dialog.Title
                  as="h3"
                  tw="font-bold tracking-wider text-center text-darkblue text-5xl font-druk mt-2"
                >
                  JGTC SHOWCASE
                </Dialog.Title>
                <div tw="mt-12 w-[500px] mx-auto">
                  <div tw="relative w-full border-8 border-[#D0BF91]" style={{paddingTop: "56.25%"}}>
                    <ReactPlayer
                      url={ShowcaseData[1].video}
                      width="100%"
                      height="100%"
                      tw="absolute top-0 left-0"
                      controls={true}
                    />
                    <img src="/images/Showcase/wing.png" alt="gaada" tw="absolute w-[66px] bottom-0 left-[-66px]"/>
                    <img src="/images/Showcase/wing.png" alt="gaada" tw="absolute w-[66px] top-0 right-[-66px] rotate-180"/>
                  </div>
                  <p tw="py-2 pl-3 w-full bg-orangejeruk mt-2 text-wheat font-bold text-2xl">{ShowcaseData[1].name}</p>
                  <p tw="mt-2 w-full text-justify">{ShowcaseData[1].line1}</p>
                  <p tw="mt-2 text-justify">{ShowcaseData[1].line2}</p>
                </div>

                {/* <div tw="mt-4">
                  <button
                    type="button"
                    tw="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div> */}
                <img
                  src="/images/Showcase/edge.png"
                  alt="edge"
                  tw="absolute top-0 left-0 w-[88px]"
                />
                <img
                  src="/images/Showcase/edge.png"
                  alt="edge"
                  tw="absolute bottom-0 right-0 rotate-180 w-[88px]"
                />
                <p
                  tw="absolute top-6 right-6 text-black text-3xl cursor-pointer"
                  onClick={closeModal}
                >
                  X
                </p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export { Modals }
