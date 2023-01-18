import { Box, Button, Divider, Paper, Typography } from '@mui/material';

export interface CartRightProps {}

export function CartRight(props: CartRightProps) {
  return (
    <Box>
      <Paper elevation={0}>
        <Box padding={1.5}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>Giao tới</Typography>
            <Button variant="text" sx={{ textTransform: 'none' }} color="secondary">
              Thay đổi
            </Button>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography fontWeight="500">Trần Xuân Nghiệp</Typography>
            <Divider orientation="vertical" sx={{ mx: 1.5 }} flexItem />
            <Typography fontWeight="500">0334448311</Typography>
          </Box>
          <Typography variant="caption" color="darkgray">
            Ngõ 58 ngách 31 hẻm 8 đường thanh bình - mộ lao - hà đông, Phường Mộ Lao, Quận Hà Đông,
            Hà Nội
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={0} sx={{ my: 1.5 }}>
        <Box padding={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">Tổng tiền</Typography>
            <Typography variant="body2" color="#fe3834">
              200.000đ
            </Typography>
          </Box>
          <Typography variant="body2" style={{ opacity: 0.8, fontSize: '12px', marginTop: '15px' }}>
            * Đơn hàng đã bao gồm thuế VAT nếu có.
          </Typography>
        </Box>
      </Paper>
      <Button fullWidth variant="contained">
        Mua hàng (1)
      </Button>
    </Box>
  );
}
