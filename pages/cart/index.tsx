import { CartAlertConfirm, CartLeft, CartRight } from '@/components/cart';
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
      <Grid
        container
        flexWrap="nowrap"
        spacing={2}
        sx={{
          flexDirection: {
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
        }}
      >
        <Grid item>
          <CartLeft />
        </Grid>
        <Grid
          item
          sx={{
            width: {
              md: '350px',
              sm: '500px',
              xs: '100%',
            },
          }}
        >
          <CartRight />
        </Grid>
      </Grid>
      <CartAlertConfirm />
    </Box>
  );
}

CartPage.Layout = MainLayout;
