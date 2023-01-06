import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { LayoutProps } from 'models';
import { useEffect } from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('Main Layout mounting');
    return () => console.log('Main Layout unmounting');
  }, []);
  return (
    <Container maxWidth="lg">
      <Stack minHeight="100vh">
        <Header />
        <Box component="main" flexGrow={1}>
          <div>{children}</div>
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
}
