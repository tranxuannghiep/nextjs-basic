import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/models';

const BLOG_FOLDER = path.join(process.cwd(), 'blog');

export async function getPostList(): Promise<Post[]> {
  //read all markdown files
  const fileNameList = fs.readdirSync(BLOG_FOLDER);
  const postList: Post[] = [];
  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, excerpt, content } = matter(fileContents, {
      excerpt_separator: '<!-- truncate-->',
    });
    postList.push({
      id: fileName,
      title: data.title,
      slug: data.slug,
      tagList: data.tags,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      description: excerpt || '',
      mdContent: content,
      publishedDate: "2020-02-02",
      thumbnailUrl: data.image || null,
    });
  }
  return postList;
}
