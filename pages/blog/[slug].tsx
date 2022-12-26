import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkPrism from 'remark-prism';
import Script from 'next/script';
import * as React from 'react';

export interface BlogDetailPageProps {
  post: Post;
}

export default function BlogDetailPage({ post }: BlogDetailPageProps) {
  return (
    <Box mt={{ xs: 3, sm: 11 }}>
      <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 2, sm: 7 }}>
        Blog Detail
      </Typography>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      <Script src="/prism.js" strategy="afterInteractive" />
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
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc)
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog detail' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '');
  post.htmlContent = file.toString();

  return {
    props: {
      post,
    },
  };
};
