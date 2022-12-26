import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface BlogDetailPageProps {
  post: Post;
}

export default function BlogDetailPage({ post }: BlogDetailPageProps) {
  return (
    <Box mt={{ xs: 3, sm: 11 }}>
      <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 2, sm: 7 }}>
        Post Detail
      </Typography>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <p>{post.mdContent}</p>
    </Box>
  );
}

BlogDetailPage.Layout = MainLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();
  return {
    paths: postList.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };
  const post = postList.find((post) => post.slug === slug);
  if (!post) return { notFound: true };
  return {
    props: {
      post,
    },
  };
};
