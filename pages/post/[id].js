import { useRouter } from 'next/router'
import { MainLayout } from '../../components/mainLayout';

export default function Post () {
  
  const router = useRouter()
  console.log(router);
  return (
    <MainLayout>
      <h1>Post {router.query.id}</h1>
    </MainLayout>
  )
}
