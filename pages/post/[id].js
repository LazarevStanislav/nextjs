import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/mainLayout';

export default function Post ({ post: serverPost }) {
  
  const [ post, setPosts ] = useState( serverPost )
  const router = useRouter()
  
  useEffect(() => {
    async function load () {
      const response = await fetch( `http://localhost:4200/posts/${router.query.id}` )
      const data = await response.json()
      setPosts(data)
    }

    if ( !serverPost ) {
      load()
    }
  }, [])
  
  if ( !post ) {
    return (
      < MainLayout >
      <h1>Loading ...</h1>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1>{ post.title }</h1>
      <hr />
      <p>{ post.body }</p>
      <Link href={'/posts'}><a>Back to all posts</a></Link>
    </MainLayout>
  )
}


Post.getInitialProps = async ( { query, req } ) => {
  if ( !req ) {
    return {post: null}
  }
  const response = await fetch( `http://localhost:4200/posts/${query.id}` )
  const post = await response.json()
  
  return {
    post
  }
}


// export async function getServerSideProps( { query, req } ) {
//     if ( !req ) {
//       return {post: null}
//     }
//     const response = await fetch( `http://localhost:4200/posts/${query.id}` )
//     const post = await response.json()
    
//     return {
//       props: {post}
//     }
//   }
