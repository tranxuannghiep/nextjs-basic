import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';

export interface ParamsCacheStaleFiveProps {
  query: any;
  post: any;
}

export default function ParamsCacheStaleFive({ post, query }: ParamsCacheStaleFiveProps) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((x) => {
        if (x > 60) clearInterval(id);
        return x + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <h1>Params Cache</h1>
      <p>Time: {seconds}s</p>
      <h2>Post detail</h2>
      <p>{post?.title}</p>
      <p>{post?.author}</p>
      <p>{post?.description}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');
  await new Promise((res) => setTimeout(res, 3000));
  const postId = context.query.postId;
  if (!postId) return { props: { query: context.query } };
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();
  return {
    props: {
      query: context.query,
      post: data,
    },
  };
};
