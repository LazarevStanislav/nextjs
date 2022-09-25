import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/mainLayout';

export default function Post () {
  const [ posts, setPosts ] = useState( [] )
  
  useEffect(() => {
    async function load () {
      const response = await fetch( 'http://localhost:4200/posts' )
      const json = await response.json()
      setPosts(json)
    }
    load()
  }, [])
  


  return (
    <MainLayout>
    
    <Head>
      <title>Posts</title>
    </Head>
      <h1>Posts Page</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </MainLayout>
  )
}
