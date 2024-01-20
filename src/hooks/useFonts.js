import { Inter, Kanit } from 'next/font/google'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'block',
})

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const useFonts = () => {
  return {
    inter: inter.className,
    kanit: kanit.className,
  }
}

export default useFonts