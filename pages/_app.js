import NextNprogress from 'nextjs-progressbar'
import '../style/main.scss'

export default function MyApp ( { Component, pageProps } )
{
  return (
    <>
      <NextNprogress
        color='#499'
        startPosition="0.9"
        stopDelayMs='200'
        height='3'
      />
      <Component { ...pageProps } />
      {/* <style jsx global>{ `
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style> */}
    </>
  )
}
