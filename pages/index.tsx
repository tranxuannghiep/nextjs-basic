import { Seo } from '@/components/common/seo';
import { FeatureWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { NextPageWithLayout } from 'models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'NextJS Basic',
          description: 'Home page NextJs basic',
          url: 'https://nextjs-basic-gilt.vercel.app/',
          thumbnailUrl:
            'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
