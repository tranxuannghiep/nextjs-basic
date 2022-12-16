import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => router.push(`post/${post.id}`)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await fetchData.json();
  return {
    props: {
      posts: data.map((post: any) => ({ id: post.id, title: post.title })),
    },
  };
};
