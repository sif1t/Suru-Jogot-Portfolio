import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SmoothScroll from '@/components/SmoothScroll'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SmoothScroll offset={90} />
      <Component {...pageProps} />
    </>
  )
}
