import { css } from "twin.macro"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Museum() {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div tw="relative">
      <div tw="relative w-screen h-screen">
        <Image
          src={`/images/Museum/${pid}.png`}
          layout="fill"
          alt=""
          tw="object-cover"
          quality={100}
        />
      </div>

    <Link href={`/museum/${parseInt(pid)-1}`} passHref>
      <div
        tw="text-white absolute left-5 md:left-0 xl:left-10 text-4xl cursor-pointer hidden sm:block"
        css={css`
          z-index: 20;
          top: 50%;
          transform: translate(-50%, 0);
        `}
      >
        &lt;
      </div>
    </Link>

    <Link href={`/museum/${parseInt(pid)+1}`} passHref>
      <div
        tw="text-white absolute right-5 md:right-0 xl:right-10 text-4xl cursor-pointer hidden sm:block"
        css={css`
          z-index: 20;
          top: 50%;
          transform: translate(-50%, 0);
        `}
      >
        &gt;
      </div>
    </Link>
    </div>
  )
}
