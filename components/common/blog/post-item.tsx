import { Box, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import { Post } from 'models';

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Stack direction={{ xs: 'row', sm: 'column', md: 'row' }} my={2}>
        <Typography variant="body1">{format(post.publishedDate, 'dd MMM yyyy')}</Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 2, display: { sm: 'none', md: 'block' } }}
        />
        <Typography variant="body1">{post.tagList.join(', ')}</Typography>
      </Stack>
      <Typography variant="body2">{post.description}</Typography>
    </Box>
  );
}
