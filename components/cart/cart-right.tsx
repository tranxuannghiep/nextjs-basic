import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Address } from '../common';
import { formatPrice } from '@/utils';
import { getNumberProduct, getTotalPrice } from '@/actions/cartAction';

export interface CartRightProps {}

export function CartRight(props: CartRightProps) {
  const router = useRouter();

  const productsBuy = getNumberProduct();

  return (
    <Box>
      <Address />
      <Paper elevation={0} sx={{ my: 1.5 }}>
        <Box padding={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">Tổng tiền</Typography>
            <Typography variant="body2" color="#fe3834">
              {formatPrice(getTotalPrice())}
            </Typography>
          </Box>
          <Typography variant="body2" style={{ opacity: 0.8, fontSize: '12px', marginTop: '15px' }}>
            * Đơn hàng đã bao gồm thuế VAT nếu có.
          </Typography>
        </Box>
      </Paper>
      <Button
        fullWidth
        variant="contained"
        onClick={() => router.push('/payment')}
        disabled={!productsBuy}
      >
        Mua hàng {productsBuy > 0 && `(${productsBuy})`}
      </Button>
    </Box>
  );
}
