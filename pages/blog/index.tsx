import { MainLayout } from '@/components/layout';
import { getPostList } from '@/utils/posts';
import { Stack } from '@mui/material';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  const router = useRouter();
  return (
    <Stack flexGrow={1}>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => router.push(`post/${post.id}`)}>
            {post.title}
          </li>
        ))}
      </ul>
    </Stack>
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
