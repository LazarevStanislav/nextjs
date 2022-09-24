import Head from 'next/head';
import Link from 'next/link';

export default function Index () {
  return <>
    <Head>
      <title>Next Hello</title>
      <meta name='keywords' content='next, javascript,nextjs,react'></meta>
      <meta name='description' content='this is tutorial for next'></meta>
      <meta charSet='utf-8'></meta>
    </Head>
    <h1>Hello next.js</h1>
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href='/posts'><a>Posts</a></Link></p>

  </>
}
