import Carousel from "react-multi-carousel"

const CarouselLib = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1366 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1366, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <>
      {/* Mobile Manual Page */}
      {/* <div
          tw="mt-section px-6 flex lg:hidden space-x-6 items-center justify-start"
          css={css`
            flex-wrap: nowrap;
            overflow-x: scroll;
            ::-webkit-scrollbar {
              width: 0;
              background: transparent;
            }
            scrollbar-width: none;
          `}
        >
          <div
            tw="flex items-center justify-center space-x-6"
            css={css`
              flex: 0 0 auto;
              overflow-x: hidden;
            `}
          >
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
          </div>
        </div> */}

      {/* Desktop Manual Page */}
      {/* <div
          tw="mt-section container mx-auto hidden lg:flex space-x-6 items-center justify-start"
          css={css`
            flex-wrap: nowrap;
            overflow-x: scroll;
            ::-webkit-scrollbar {
              width: 0;
              background: transparent;
            }
            scrollbar-width: none;
          `}
        >
          <div
            tw="flex items-center justify-center space-x-6"
            css={css`
              flex: 0 0 auto;
              overflow-x: hidden;
            `}
          >
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
          </div>
        </div> */}

      {/* Library Desktop Page */}
      {/* <div tw="mt-section hidden lg:block relative px-pcontainer">
          <Carousel responsive={responsive} renderButtonGroupOutside={true}>
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 1"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 2"
            />
            <HeightImage
              url="/images/Landing/orange.png"
              height="260"
              alt="Artis 3"
            />
            <HeightImage
              url="/images/Landing/green.png"
              height="260"
              alt="Artis 4"
            />
          </Carousel>
        </div> */}
    </>
  )
}

export { CarouselLib }
