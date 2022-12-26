import { PostItem } from '@/components/common/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Divider, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';
export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box mt={{ xs: 3, sm: 11 }}>
      <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 2, sm: 7 }}>
        Blog
      </Typography>
      {posts.map((post) => (
        <Link key={post.id} href={`blog/${post.slug}`} passHref>
          <Box>
            <PostItem post={post} />
            <Divider sx={{ my: { xs: 2, sm: 4 } }} />
          </Box>
        </Link>
      ))}
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
