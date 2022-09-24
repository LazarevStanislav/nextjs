import Router from 'next/router'
import Link from 'next/link';

export default function About() {
  
  const onClickHandler = () => {
    Router.push('/')
  
  }

  return <>
    <h1>About Page</h1>

    <button onClick={onClickHandler}>Go back to home</button>
    <button onClick={() => Router.push('/posts')}>Go to the posts</button>
    <Link href='/about/author'><a>Go to the posts</a></Link>
  </>
}
