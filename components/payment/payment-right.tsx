import { getCartsSelected, getTotalPrice } from '@/actions/cartAction';
import { formatPrice, getTierPricePromotion } from '@/utils';
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Address } from '../common';

export interface PaymentRightProps {}

export function PaymentRight(props: PaymentRightProps) {
  const cartSelected = useMemo(() => {
    return getCartsSelected();
  }, []);
  const totalPrice = getTotalPrice();
  const shipPrice = 20000 * Object.keys(cartSelected).length;

  const promotionShip = useMemo(() => {
    let promotionPrice = 0;
    Object.entries(cartSelected).forEach(([key, carts]) => {
      const currentPrice = carts.reduce((acc, val) => acc + val.amount * val.price, 0);
      promotionPrice += getTierPricePromotion(currentPrice).discountPrice;
    });
    return promotionPrice;
  }, [cartSelected]);

  return (
    <Box>
      <Address />
      <Paper elevation={0} sx={{ my: 1.5 }}>
        <Box padding={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="GrayText">
              Tạm tính
            </Typography>
            <Typography variant="caption" color="GrayText">
              {formatPrice(totalPrice)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="GrayText">
              Phí vận chuyển
            </Typography>
            <Typography variant="caption" color="GrayText">
              {formatPrice(shipPrice)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="GrayText">
              Khuyến mãi vận chuyển
            </Typography>
            <Typography variant="caption" color="#00ab56">
              -{formatPrice(promotionShip)}
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="GrayText">
              Tổng tiền
            </Typography>
            <Stack alignItems="flex-end">
              <Typography variant="body1" color="#fe3834" fontWeight="500">
                {formatPrice(totalPrice + shipPrice - promotionShip)}
              </Typography>
              <Typography variant="caption" color="GrayText">
                (Đã bao gồm VAT nếu có)
              </Typography>
            </Stack>
          </Box>
          <Box mt={2}>
            <Button fullWidth variant="contained">
              Đặt hàng
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
