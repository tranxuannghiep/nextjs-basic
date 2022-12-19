import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from 'models';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const handleNavigateDetailPage = () => {
    router.push({
      pathname: '/post/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    });
  };
  return <div>Home Page</div>;
};
Home.Layout = MainLayout;
export default Home;
