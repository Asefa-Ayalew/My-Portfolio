import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='grid drid-cols-12 gap-6'>
<div className='col-span-3'>
  sidebaar
</div>
<div className='col-span-9'>
<Component {...pageProps} />
</div>
    </div>
  )
}

export default MyApp