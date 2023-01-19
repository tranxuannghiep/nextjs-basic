import { CartLeft, CartRight } from '@/components/cart';
import { Seo } from '@/components/common/seo';
import { MainLayout } from '@/components/layout';
import { Box, Grid, Typography } from '@mui/material';

export default function CartPage() {
  return (
    <Box>
      <Seo
        data={{
          title: 'Cart | NextJS Basic',
          description: 'Cart page NextJs basic',
          url: `${process.env.HOST_URL}/cart`,
          thumbnailUrl:
            'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />
      <Box pb={3}>
        <Typography variant="h5">GIỎ HÀNG</Typography>
      </Box>
      <Grid container flexWrap="nowrap" spacing={2}>
        <Grid item flexGrow={1}>
          <CartLeft />
        </Grid>
        <Grid item width="350px">
          <CartRight />
        </Grid>
      </Grid>
    </Box>
  );
}

CartPage.Layout = MainLayout;
