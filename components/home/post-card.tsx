import { Card, CardContent } from '@mui/material';
import { Post } from 'models';
import { PostItem } from '../common/blog';

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
}
