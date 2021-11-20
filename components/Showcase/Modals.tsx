import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { css, cx } from "@emotion/css"
import { ShowcaseData } from "./ShowcaseData"
import tw, { styled } from "twin.macro"
import ReactPlayer from "react-player/youtube"

interface ModalsProps {
  isOpen: boolean
  closeModal(): void
  openModal(): void
  indexModal: number
}

const Modals: React.FC<ModalsProps> = ({
  isOpen,
  closeModal,
  openModal,
  indexModal = 0,
}) => {
  const HiddenHalFIpad = styled.div`
    @media screen and (max-width: 850px) {
      display: none;
    }
  `
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
          <div tw="min-h-screen px-4 text-center flex items-center justify-center">
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
              <div tw="w-[855px] mx-auto flex flex-col p-6 my-8 overflow-x-hidden text-left align-middle transition-all transform bg-wheat shadow-xl relative rounded-xl">
                <Dialog.Title
                  as="h3"
                  tw="font-bold tracking-wider text-center text-darkblue text-2xl sm:text-5xl font-druk mt-6 sm:mt-2"
                >
                  JGTC SHOWCASE
                </Dialog.Title>
                <div tw="mt-4 sm:mt-12 w-[230px] sm:w-[500px] mx-auto">
                  <div
                    tw="relative w-full border-4 sm:border-8 border-[#D0BF91]"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <ReactPlayer
                      url={ShowcaseData[indexModal].video}
                      width="100%"
                      height="100%"
                      tw="absolute top-0 left-0"
                      controls={true}
                    />
                    <img
                      src="/images/Showcase/wing.png"
                      alt=""
                      tw="absolute w-[32px] sm:w-[66px] bottom-[-3px] sm:bottom-[-6px] left-[-36px] sm:left-[-74px]"
                    />
                    <img
                      src="/images/Showcase/wing.png"
                      alt=""
                      tw="absolute w-[32px] sm:w-[66px] top-[-3px] sm:top-[-6px] right-[-36px] sm:right-[-74px] rotate-180"
                    />
                  </div>
                  <p tw="py-2 pl-3 w-full bg-orangejeruk mt-2 text-wheat font-bold text-sm sm:text-2xl">
                    {ShowcaseData[indexModal].name}
                  </p>
                  <p tw="mt-2 w-full text-justify font-normal font-condensedmedium text-xs sm:text-base">
                    {ShowcaseData[indexModal].line1}
                  </p>
                  <p tw="mt-2 text-justify font-normal font-condensedmedium text-xs sm:text-base">
                    {ShowcaseData[indexModal].line2}
                  </p>
                </div>

                {/* Airtime section */}
                <HiddenHalFIpad tw="absolute top-[180px] left-[12px]">
                  <div tw="relative bg-olivegreen h-[40px] rounded-xl px-3 pt-3 text-wheat font-futuramedium text-[14px]">
                    {ShowcaseData[indexModal].airtime}

                    <div tw="absolute bg-orangejeruk text-wheat font-futura px-1 rounded-lg top-[-10px] right-[10px]">
                      AIRTIME
                    </div>
                    <img
                      src="/images/Showcase/airtimetrumpet.png"
                      alt=""
                      tw="absolute top-[-15px] right-[63px] w-[30px]"
                    />
                  </div>
                </HiddenHalFIpad>
                {/* End of Airtime */}

                {/* Social Media section */}
                <HiddenHalFIpad tw="absolute top-[300px] right-0 bg-orangejeruk rounded-l-full font-druk tracking-widest pr-8 pl-3 text-wheat">
                  SOCIAL MEDIA
                </HiddenHalFIpad>
                <HiddenHalFIpad tw="absolute top-[330px] right-0 bg-olivegreen py-2 rounded-l-2xl font-druk tracking-widest text-wheat w-[160px] flex items-center justify-center space-x-2">
                  <a
                    tw="bg-wheat rounded-full p-[1px]"
                    href={ShowcaseData[indexModal].twitter}
                    target="_blank"
                    rel="noreferrer"
                    style={{outline: "none"}}
                  >
                    <img
                      src="/images/Showcase/icon/twt.png"
                      alt=""
                      tw="w-[40px]"
                    />
                  </a>
                  <a
                    tw="bg-wheat rounded-full p-[1px]"
                    href={ShowcaseData[indexModal].ig}
                    target="_blank"
                    rel="noreferrer"
                    style={{outline: "none"}}
                  >
                    <img
                      src="/images/Showcase/icon/ig.png"
                      alt=""
                      tw="w-[40px]"
                    />
                  </a>
                  <a
                    tw="bg-wheat rounded-full p-[1px]"
                    href={ShowcaseData[indexModal].youtube}
                    target="_blank"
                    rel="noreferrer"
                    style={{outline: "none"}}
                  >
                    <img
                      src="/images/Showcase/icon/youtube.png"
                      alt=""
                      tw="w-[40px]"
                    />
                  </a>
                </HiddenHalFIpad>
                {/* End of Social Media section */}

                <img
                  src="/images/Showcase/edge.png"
                  alt="edge"
                  tw="absolute top-0 left-0 w-[48px] sm:w-[88px]"
                />
                <img
                  src="/images/Showcase/edge.png"
                  alt="edge"
                  tw="absolute bottom-0 right-0 rotate-180 w-[48px] sm:w-[88px]"
                />
                <img
                  tw="absolute top-6 right-6 text-black text-3xl cursor-pointer w-[20px]"
                  alt=""
                  src="/images/Showcase/closeButton.svg"
                  onClick={closeModal}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export { Modals }
