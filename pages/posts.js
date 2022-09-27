import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/mainLayout';

export default function Post ({ posts: serverPosts}) {
  const [ posts, setPosts ] = useState( serverPosts )
  
  useEffect(() => {
    async function load () {
      const response = await fetch( 'http://localhost:4200/posts' )
      const json = await response.json()
      setPosts(json)
    }
    if ( !serverPosts ) {
      load()
    }
  }, [])
  

  if ( !posts ) {
    return (
      <MainLayout>
        <h1>Loading ...=\</h1>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
    <Head>
      <title>Posts</title>
    </Head>
      <h1>Posts Page</h1>
      <ul>
        { posts.map( post => (
          <li key={ post.id }>
            <Link href={ `/post/[id]` }  as={`/post/${post.id }`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}


Post.getInitialProps = async ( {req} ) => {
  if ( !req ) {
    return {posts: null}
  }
  const response = await fetch( 'http://localhost:4200/posts' )
  const posts = await response.json()

  return {
    posts
  }
}
