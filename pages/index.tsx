import Head from 'next/head'
import { Roboto } from '@next/font/google'
import Link from "next/link";
import {LINKS} from "../src/constants/links";


const roboto = Roboto({style:'normal', weight:'400'})
export default function Home() {
  return (
    <>
      <Head>
        <title>Собери их всех</title>
        <meta name="description" content="Pokemon livelib"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={roboto.className}>
        <h1 className="text-5xl mt-1 text-center  text-bold">
         Собери их всех
        </h1>
        <Link href={LINKS.MAPS.KANTO}>

            карта канто

        </Link>
      </main>
    </>
  )
}
