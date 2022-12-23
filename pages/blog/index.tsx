import { getPostList } from '@/utils/posts';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
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

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  //   const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  //   const data = await fetchData.json();

  const data = await getPostList();

  // convert markdown files into list of javascript objects
  return {
    props: {
      posts: data.map((post: any) => ({ id: post.id, title: post.title })),
    },
  };
};
