import "twin.macro"
import Head from "next/head"
import { Navbar } from "@components/Navbar"
import { Footer } from "@components/Footer"
import { VideoLanding } from "@components/Landing/VideoLanding"
import { PastLineUp } from "@components/Landing/PastLineUp"
import { Kitabisa } from "@components/Landing/Kitabisa"

// Delete this lib later
// import "react-multi-carousel/lib/styles.css"
// import fg from "fast-glob"

export default function Home() {

  return (
    <>
      <Head>
        <title>JGTC Festival</title>
        <meta
          name="description"
          content="The biggest jazz festival held by student"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <VideoLanding />

      <Kitabisa />

      <PastLineUp />

      <Footer />
    </>
  )
}

// export async function getStaticProps() {
//   const lineup = (
//     await fg(["public/images/Landing/pastlineup/*"], {
//       onlyFiles: true,
//     })
//   ).map(val => val.replace("public/", "/"))

//   return {
//     props: {
//       lineup,
//     },
//   }
// }
