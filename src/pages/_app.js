import Header from '@/components/Header'
import '@/styles/globals.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={noto.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
