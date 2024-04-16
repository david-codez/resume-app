import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>David Daniel Resume App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Container>
          <h1>David Daniel</h1>
          <Link href="/resume"> 
            <a><h1>Click Here For Resume</h1></a>
          </Link>
        </Container>
      </div>
    </>

  )
}
