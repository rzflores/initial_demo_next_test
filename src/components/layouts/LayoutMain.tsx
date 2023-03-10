import { PropsWithChildren } from 'react'
import styles from './LayoutMain.module.css'
import Head from 'next/head'
import { CustomNavbar } from '../CustomNavbar'



export const LayoutMain = ({ children } : PropsWithChildren<{}> ) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar />
      <main className={styles.main}>   
        { children }
      </main>
    </div>
  )
}
