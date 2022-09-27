import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/mainLayout';
import { MyPost } from '../interfaces/post';

interface PostPageProps {
  posts: MyPost[]
}


export default function Post ({ posts: serverPosts}): PostPageProps {
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
    return <MainLayout>
        <h1>Loading ...=\</h1>
      </MainLayout>
  }

  return <MainLayout>
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
}


Post.getInitialProps = async ( {req}: NextPageContext ) => {
  if ( !req ) {
    return {posts: null}
  }
  const response = await fetch( 'http://localhost:4200/posts' )
  const posts: MyPost[] = await response.json()

  return {
    posts
  }
}
