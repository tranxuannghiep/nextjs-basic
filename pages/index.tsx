import { FeatureWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { NextPageWithLayout } from 'models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
