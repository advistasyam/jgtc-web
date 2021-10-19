import React from "react"
import HeightImage from "../HeightImage/HeightImage"

interface CarouselImageProps {
  link: string
}

const CarouselImage: React.FC<CarouselImageProps> = ({ link }) => {
  return (
    <HeightImage
      url={link}
      height="260"
      alt="Line up artist"
      undragable={true}
      cssextend={`
            @media screen and (max-width: 767px) {
              padding: 3px;
              div {
                position: unset !important;
                height: 150px;
              }
            }
            
            @media screen and (max-width: 321px) {
              padding: 2px;
              div {
                position: unset !important;
                height: 140px;
              }
            }`}
    />
  )
}

export { CarouselImage }
