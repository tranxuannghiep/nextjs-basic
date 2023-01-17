import { CartLeft, CartRight } from '@/components/cart';
import { MainLayout } from '@/components/layout';
import { Box, Grid, Typography } from '@mui/material';

export default function CartPage() {
  return (
    <Box>
      <Box pb={3}>
        <Typography variant="h5">GIỎ HÀNG</Typography>
      </Box>
      <Grid container flexWrap="nowrap" spacing={2}>
        <Grid item flexGrow={1}>
          <CartLeft />
        </Grid>
        <Grid item width="310px">
          <CartRight />
        </Grid>
      </Grid>
    </Box>
  );
}

CartPage.Layout = MainLayout;
