import { Global } from '../styles/Global.styled';
import type { AppProps } from 'next/app';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}


export default App;
