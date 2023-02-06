import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css'

type NextPageWihtLayout = NextPage & {
  getLayout?: (page : ReactElement) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
   Component : NextPageWihtLayout
}


export default function App({ Component, pageProps } : AppPropsWithLayout) {
  const getLayout =Component.getLayout || ((page : ReactElement) => page);


  // return <Component {...pageProps} />

  return getLayout( <Component {...pageProps} /> )

}
