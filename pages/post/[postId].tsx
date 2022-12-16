import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter();

  return (
    <div>
      Post Detail page
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
      { params: { postId: '4' } },
      { params: { postId: '5' } },
      { params: { postId: '6' } },
      { params: { postId: '7' } },
      { params: { postId: '8' } },
      { params: { postId: '9' } },
      { params: { postId: '10' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await fetchData.json();
  return {
    props: {
      post: data,
    },
  };
};
