import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { LayoutProps } from 'models';
import Link from 'next/link';
import { useEffect } from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('Main Layout mounting');
    return () => console.log('Main Layout unmounting');
  }, []);
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/works">Works</Link>
        <div>{children}</div>
      </Box>
      <Footer />
    </Stack>
  );
}
