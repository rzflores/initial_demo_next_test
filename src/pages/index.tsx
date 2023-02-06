import { Inter } from '@next/font/google'
import { LayoutMain } from '../components/layouts/LayoutMain'
import { LayoutWhite } from '../components/layouts/LayoutWhite'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutMain> 
      <LayoutWhite>
      <div className={'grid'}>
        <h2 className={'card'}>
        Home 
        </h2>
      </div>            
      </LayoutWhite>      
    </LayoutMain>      
    

  //   <div>
  //     <Head>
  //       <title>Create Next App</title>
  //       <meta name="description" content="Generated by create next app" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <CustomNavbar />
  //     <main className={styles.main}>
  //  {/* <Link className={styles.card} href="/auth" 
  //       // replace
  //       >
  //       <h2 className={inter.className}>
  //             Login
  //           </h2>    
  //         </Link> */}
  //       <div className={styles.grid}>
  //           <h2 className={styles.card}>
  //             Home 
  //           </h2>
  //       </div>
  //     </main>
  //   </div>
  )
}
