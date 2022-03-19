import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { css, cx } from "@emotion/css"
import { CommunitySessionData } from "./CommunitySessionData"
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
          tw="fixed inset-0 z-[200] overflow-y-auto"
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
                  tw="font-bold tracking-wider text-center text-orangejeruk text-2xl sm:text-5xl font-druk mt-6 sm:mt-2"
                >
                  COMMUNITY SESSION
                </Dialog.Title>
                <div tw="mt-4 sm:mt-12 w-[230px] sm:w-[500px] mx-auto mb-8">
                  <div
                    tw="relative w-full"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <ReactPlayer
                      url={CommunitySessionData[indexModal].video}
                      width="100%"
                      height="100%"
                      tw="absolute top-0 left-0"
                      controls={true}
                    />
                    <img
                      src="/images/Jots/circle.png"
                      alt=""
                      tw="absolute w-[25px] sm:w-[43px] bottom-0 left-[-25px] sm:left-[-43px]"
                    />
                    <img
                      src="/images/Jots/circle.png"
                      alt=""
                      tw="absolute w-[25px] sm:w-[43px] top-0 right-[-25px] sm:right-[-43px] rotate-180"
                    />
                  </div>
                  <p tw="py-2 pl-3 w-full bg-darkblue mt-2 text-wheat font-bold text-sm sm:text-2xl">
                    {CommunitySessionData[indexModal].name}
                  </p>
                  <p tw="mt-2 w-full text-olivegreen text-justify font-normal font-condensedmedium text-xs sm:text-base">
                    {CommunitySessionData[indexModal].line1}
                  </p>
                  <p tw="mt-2 text-justify text-olivegreen font-normal font-condensedmedium text-xs sm:text-base">
                    {CommunitySessionData[indexModal].line2}
                  </p>
                </div>

                {/* Airtime section */}
                <HiddenHalFIpad tw="absolute top-[180px] left-[30px]">
                  <div tw="relative bg-olivegreen h-[25px] rounded-r-xl px-2 pt-1 font-futuramedium text-[12px] text-wheat">
                    {CommunitySessionData[indexModal].airtime}

                    <div tw="absolute bg-darkblue text-wheat font-futura px-1 top-[-15px] right-[15px]">
                      AIRTIME
                    </div>
                    <img
                      src="/images/Jots/airtime.png"
                      alt=""
                      tw="absolute top-[-10px] left-[-25px] w-[40px]"
                    />
                  </div>
                </HiddenHalFIpad>
                {/* End of Airtime */}

                {/* Social Media section */}
                <HiddenHalFIpad
                  tw="absolute bottom-0 left-[10px] rounded-t-full font-druk tracking-widest 
                    text-wheat h-[182px]"
                >
                  <div tw="h-full bg-darkblue px-2 pt-2 z-[2] rounded-t-full">
                    <div
                      tw="relative h-full px-1 bg-wheat rounded-t-full flex flex-col items-center justify-start space-y-2 border-t-4 border-l-4 border-r-4 
                        border-mainblack"
                    >
                      <div tw="pl-8 pr-3 bg-orangejeruk absolute top-[-6px] left-[60%] z-[-10] text-darkblue whitespace-nowrap rounded-r-xl">
                        SOCIAL MEDIA
                      </div>
                      <a
                        tw="bg-olivegreen rounded-full p-[1px]"
                        href={CommunitySessionData[indexModal].twitter}
                        target="_blank"
                        rel="noreferrer"
                        style={{ outline: "none" }}
                      >
                        <img
                          src="/images/Showcase/icon/twt.png"
                          alt=""
                          tw="w-[40px]"
                        />
                      </a>
                      <a
                        tw="bg-olivegreen rounded-full p-[1px]"
                        href={CommunitySessionData[indexModal].ig}
                        target="_blank"
                        rel="noreferrer"
                        style={{ outline: "none" }}
                      >
                        <img
                          src="/images/Showcase/icon/ig.png"
                          alt=""
                          tw="w-[40px]"
                        />
                      </a>
                      <a
                        tw="bg-olivegreen rounded-full p-[1px]"
                        href={CommunitySessionData[indexModal].youtube}
                        target="_blank"
                        rel="noreferrer"
                        style={{ outline: "none" }}
                      >
                        <img
                          src="/images/Showcase/icon/youtube.png"
                          alt=""
                          tw="w-[40px]"
                        />
                      </a>
                    </div>
                  </div>
                </HiddenHalFIpad>
                {/* End of Social Media section */}

                {/* <img
                  src="/images/Showcase/edge.png"
                  alt="edge"
                  tw="absolute top-0 left-0 w-[48px] sm:w-[88px]"
                /> */}
                <img
                  src="/images/CommunitySession/topright.png"
                  alt=""
                  tw="absolute bottom-0 right-0 w-[60px] sm:w-[120px]"
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
