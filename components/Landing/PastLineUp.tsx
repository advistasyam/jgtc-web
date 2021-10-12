import "twin.macro"
import React from "react"
import { Example } from "@components/Carousel/Carousel"
import { Lineup } from "@components/Landing/lineup"

const PastLineUp: React.FC = () => {
  return (
    <div tw="bg-mainblack mt-48">
      <h1 tw="font-drukwide text-darkblue text-6xl text-center">
        PAST LINE UP
      </h1>
      <h2 tw="text-wheat font-druk text-3xl text-center m-2">
        Reminiscing musicians from previous Jazz Goes to Campus Festivals
      </h2>

      <Example lineup={Lineup} />
    </div>
  )
}

export { PastLineUp }
