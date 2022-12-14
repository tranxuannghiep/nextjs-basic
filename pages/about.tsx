import { AdminLayout } from '@/components/layout';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState<any[]>([]);

  const router = useRouter();
  const page = router.query?.page;

  useEffect(() => {
    if (!page) return;
    (async () => {
      const fetchData = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await fetchData.json();
      setPostList(data.data);
    })();
  }, [page]);

  const handleClickNext = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <Box>
      <Typography component="h1" variant="h4" color="primary.main">
        About Page
      </Typography>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleClickNext}>Next Page</button>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
