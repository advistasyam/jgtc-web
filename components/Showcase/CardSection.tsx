import { css } from "twin.macro"
import React, { Fragment, useState } from "react"
import WidthImage from "@components/WidthImage/WidthImage"
import { Modals } from "./Modals"

const CardSection: React.FC = () => {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div tw="relative overflow-hidden">
        <div tw="mt-24" />
        <h1 tw="font-drukwide text-orangejeruk font-bold text-xl sm:text-2xl md:text-5xl xl:text-6xl text-center">
          JGTC SHOWCASE
        </h1>
        <div tw="mt-6 md:mt-12" />
        <div tw="container mx-auto">
          <div tw="flex flex-row flex-wrap justify-center w-full">
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md" onClick={openModal}>
              <WidthImage
                url="/images/Showcase/card/tompi.png"
                alt="Tompi"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/ecoutez.jpg"
                alt="Ecoutez"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/andre.jpg"
                alt="Andre"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/andien.png"
                alt="Andien"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/kamga.png"
                alt="Kamga"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/ify.jpg"
                alt="Ify"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/isyana.jpg"
                alt="Isyana"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/tohpati.jpg"
                alt="Tohpati"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
            <div tw="mx-8 my-3 md:my-8 border-4 md:border-8 border-orangejeruk rounded-md">
              <WidthImage
                url="/images/Showcase/card/kevin.jpg"
                alt="Kevin"
                width="500"
                cssextend={`
                    div {
                        @media screen and (max-width: 1280px) {
                            width: 350px;
                        }
                        @media screen and (max-width: 768px) {
                            width: 100%;
                        }
                    }
                `}
              />
            </div>
          </div>
        </div>

        {/* Absolute Desktop Section */}
        <img
          src="/images/Showcase/splitbiola.png"
          alt=""
          tw="absolute"
          css={css`
            top: 5%;
            left: 0;
            width: 350px;
            z-index: -1;

            @media screen and (max-width: 1280px) {
              width: 350px;
              left: -10%;
            }

            @media screen and (max-width: 768px) {
              width: 300px;
              left: -35%;
            }
          `}
        />
        <img
          src="/images/Showcase/splitpiano.png"
          alt=""
          tw="absolute"
          css={css`
            top: 21%;
            right: 3%;
            width: 200px;
            z-index: -1;

            @media screen and (max-width: 768px) {
              top: 30%;
              width: 150px;
              right: -10%;
            }
          `}
        />
        <img
          src="/images/Landing/sponsorpage/piano.png"
          alt=""
          tw="absolute"
          css={css`
            top: 35%;
            left: -10%;
            width: 500px;
            transform: rotate(-105deg);
            z-index: -1;

            @media screen and (max-width: 1536px) {
              width: 350px;
              left: -12%;
            }

            @media screen and (max-width: 1536px) {
              left: -30%;
              top: 50%;
              width: 240px;
            }
          `}
        />
        <img
          src="/images/Showcase/trumpetgreenyellow.png"
          alt=""
          tw="absolute"
          css={css`
            top: 55%;
            right: -10%;
            width: 500px;
            z-index: -1;

            @media screen and (max-width: 1280px) {
              width: 350px;
            }

            @media screen and (max-width: 768px) {
              top: 64%;
              right: -35%;
              transform: rotate(20deg);
            }
          `}
        />
        <img
          src="/images/Landing/sponsorpage/trompet.png"
          alt=""
          tw="absolute"
          css={css`
            bottom: -5%;
            left: -3%;
            width: 500px;
            transform: rotate(-20deg);
            z-index: -1;

            @media screen and (max-width: 768px) {
              width: 250px;
              bottom: 10%;
              left: -25%;
            }
          `}
        />
        <img
          src="/images/Showcase/trumpetgreen.png"
          alt=""
          tw="absolute"
          css={css`
            bottom: 0%;
            right: 7%;
            width: 350px;
            z-index: -1;

            @media screen and (max-width: 768px) {
              width: 200px;
              bottom: 2%;
              right: -20%;
              transform: rotate(90deg);
            }
          `}
        />
      </div>

      <Modals 
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  )
}

export { CardSection }
