import { css } from "twin.macro"
import React from "react"
import HeightImage from "../HeightImage/HeightImage"
import WidthImage from "../WidthImage/WidthImage"

const Footer: React.FC = () => {
  return (
    <div
      tw="bg-mainblack overflow-x-hidden"
      css={css`
        margin-top: 200px;

        @media screen and (max-width: 767px) {
          margin-top: 80px;
        }
      `}
    >
      <HeightImage
        url="/images/Footer/gap-footer.png"
        height="200"
        cssextend={`
          div {
            width: 100vw;
            height: 200px;
          }
          div img {
            object-fit: cover !important;
          }

          @media screen and (max-width: 767px) {
            div {
             height: 60px; 
            }
          }
        `}
        alt="footer section"
      />
      <div
        tw="flex flex-row md:space-x-4 items-center md:px-pcontainer"
        css={css`
          padding-left: 80px;

          @media screen and (max-width: 767px) {
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 50px;
            padding-bottom: 50px;
          }
        `}
      >
        <HeightImage
          url="/images/Footer/LOGO.png"
          height="285"
          alt="footer logo"
          cssextend={`
          @media screen and (max-width: 767px) {
            object-fit: contain;
            div {
              position: unset !important;
              height: 120px;
            }
          }
          `}
        />
        <div tw="flex flex-col space-y-3 md:space-y-6 md:tracking-wide font-futuramedium md:font-condensedmedium text-xs md:text-base pr-12 md:pr-0">
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage
              url="/images/Footer/location.svg"
              width="30"
              alt="jgtc location"
              cssextend={`
                @media screen and (max-width: 767px) {
                  object-fit: contain;
                  div {
                    position: unset !important;
                    width: 10px;
                  }
                }
              `}
            />
            <div>
              <p>Jazz Goes to Campus Office</p>
              <p>Lobby Gedung A (Nathanael Iskandar)</p>
              <p>Faculty of Economics and Business, Universitas Indonesia</p>
              <p>Depok, Indonesia</p>
            </div>
          </div>
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage
              url="/images/Footer/phone.svg"
              width="30"
              alt="jgtc phone number"
              cssextend={`
                @media screen and (max-width: 767px) {
                  object-fit: contain;
                  div {
                    position: unset !important;
                    width: 10px;
                  }
                }
              `}
            />
            <p>+62 877 1990 9014 (Nandira)</p>
          </div>
          <div tw="flex flex-row space-x-4 items-start text-white">
            <WidthImage
              url="/images/Footer/mail.svg"
              width="30"
              alt="jgtc email"
              cssextend={`
                @media screen and (max-width: 767px) {
                  object-fit: contain;
                  div {
                    position: unset !important;
                    width: 10px;
                  }
                }
              `}
            />
            <p>executive@jgtc-festival.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
