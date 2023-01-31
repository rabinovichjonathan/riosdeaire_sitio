import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import { RiosProvider } from '../context/RiosProvider'


export default function App({ Component, pageProps }) {
  return (
    <RiosProvider>
      <Component {...pageProps} />
    </RiosProvider>
  )
}
