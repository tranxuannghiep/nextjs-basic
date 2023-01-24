import { Seo } from '@/components/common/seo';
import { MainLayout } from '@/components/layout';
import { PaymentLeft, PaymentRight } from '@/components/payment';
import { Box, Grid } from '@mui/material';

export default function PaymentPage() {
  return (
    <Box>
      <Seo
        data={{
          title: 'Payment | NextJS Basic',
          description: 'Payment page NextJs basic',
          url: process.env.HOST_URL || 'https://nextjs-basic-gilt.vercel.app/',
          thumbnailUrl:
            'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />
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
          <PaymentLeft />
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
          <PaymentRight />
        </Grid>
      </Grid>
    </Box>
  );
}

PaymentPage.Layout = MainLayout;
