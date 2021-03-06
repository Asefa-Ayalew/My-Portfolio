import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   
  render() {
    return (
      <Html lang='en'>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
        href="https://fonts.googleapis.com/css2?family=kaushan+Script&display=swap"
        rel="stylesheet"
        />
        </Head>
        <body className='bg-fixed bg-gradient-to-r from-green-500 to-blue-400'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument