import { PostItem } from '@/components/common/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Container, Divider, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box mt={11}>
      <Container>
        <Typography component="h1" variant="h3" fontWeight="bold" mb={7}>
          Blog
        </Typography>
        {posts.map((post) => (
          <Link key={post.id} href={`blog/${post.id}`} passHref>
            <Box>
              <PostItem post={post} />
              <Divider sx={{ my: 4 }} />
            </Box>
          </Link>
        ))}
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  //   const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  //   const data = await fetchData.json();

  const postList = await getPostList();

  // convert markdown files into list of javascript objects
  return {
    props: {
      posts: postList,
    },
  };
};
