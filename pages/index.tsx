import "twin.macro"
import Head from "next/head"
import TypeIt from "typeit-react"
import HeightImage from "../components/HeightImage/HeightImage"

export default function Home() {
  return (
    <div tw="overflow-x-hidden">
      <Head>
        <title>JGTC Festival</title>
        <meta
          name="description"
          content="The biggest jazz festival held by student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div tw="min-h-screen w-screen flex flex-col items-center justify-center">
        <HeightImage url="/images/logo-jgtc-black.png" height="500" />
        <TypeIt
          tw="font-sans text-2xl"
          getBeforeInit={instance => {
            instance
              .type("Our website is under development")
              .pause(750)
              .delete()
              .pause(500)
              .type("The biggest jazz festival held by student is coming soon")
              .pause(500)

            // Remember to return it!
            return instance
          }}
          options={{
            // @ts-ignore
            speed: 60,
            loop: true,
          }}
        />
      </div>
    </div>
  )
}
