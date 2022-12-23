import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import { Post } from 'models';
import Link from 'next/link';
import { PostCard } from './post-card';

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      publishedDate: 1581440400000,
      tagList: ['Design', 'Pattern'],
      slug: '',
      author: {
        name: '',
        avatarUrl: '',
        title: '',
        profileUrl: '',
      },
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: 1581440400000,
      tagList: ['Figma', 'Icon Design'],
      slug: '',
      author: {
        name: '',
        avatarUrl: '',
        title: '',
        profileUrl: '',
      },
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink
              component="span"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              color="secondary.main"
            >
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            '&>div': {
              width: {
                xs: '100%',
                sm: '50%',
              },
            },
          }}
          spacing={3}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
