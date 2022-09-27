import Router from 'next/router'
import Link from 'next/link';
import { MainLayout } from '../../components/mainLayout';

export default function About({ title }) {
  
  const onClickHandler = () => {
    Router.push('/')
  
  }

  return <MainLayout title = {'About Page'}>
    <h1>{title}</h1>

    <button onClick={onClickHandler}>Go back to home</button>
    <button onClick={() => Router.push('/posts')}>Go to the posts</button>
    <Link href='/about/author'><a>Go to the posts</a></Link>
  </MainLayout>
}


About.getInitialProps = async () => {
  const response = await fetch( 'http://localhost:4200/about' )
  const data = await response.json()

  return {
    title: data.title
  }
}
