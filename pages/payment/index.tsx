import { MainLayout } from '@/components/layout';
import { PaymentLeft, PaymentRight } from '@/components/payment';
import { Box, Grid } from '@mui/material';

export default function PaymentPage() {
  return (
    <Box>
      <Grid container flexWrap="nowrap" spacing={2}>
        <Grid item flexGrow={1}>
          <PaymentLeft />
        </Grid>
        <Grid item width="350px">
          <PaymentRight />
        </Grid>
      </Grid>
    </Box>
  );
}

PaymentPage.Layout = MainLayout;
