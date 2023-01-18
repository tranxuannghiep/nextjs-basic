import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { Address } from '../common';

export interface PaymentRightProps {}

export function PaymentRight(props: PaymentRightProps) {
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
              1.396.300đ
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="GrayText">
              Phí vận chuyển
            </Typography>
            <Typography variant="caption" color="GrayText">
              32.000đ
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="GrayText">
              Khuyến mãi vận chuyển
            </Typography>
            <Typography variant="caption" color="#00ab56">
              -24.000đ
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="GrayText">
              Tổng tiền
            </Typography>
            <Stack alignItems="flex-end">
              <Typography variant="body1" color="#fe3834" fontWeight="500">
                1.404.300đ
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
