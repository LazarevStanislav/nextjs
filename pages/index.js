import Head from 'next/head';
import Link from 'next/link';
import { MainLayout } from '../components/mainLayout';

export default function Index () {
  return <MainLayout title = {'Home Page'}>
    <h1>Hello next.js</h1>
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href='/posts'><a>Posts</a></Link></p>

  </MainLayout>
}
