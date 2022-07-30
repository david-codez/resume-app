import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {Container} from 'react-bootstrap'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Container>
          <Link href="/resume"> 
            <a><h1> Click me and dont think too hard about it </h1></a>
          </Link>
        </Container>
      


      </div>
    </>

  )
}
