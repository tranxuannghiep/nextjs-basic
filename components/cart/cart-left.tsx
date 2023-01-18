import Delete from '@mui/icons-material/Delete';
import { Box, Checkbox, IconButton, Paper, Typography } from '@mui/material';
import { CartStore } from './cart-store';

export interface CartLeftProps {}

export function CartLeft(props: CartLeftProps) {
  return (
    <Box>
      <Paper elevation={0} sx={{ mb: 1.5 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '398px 130px 130px 130px 30px',
            alignItems: 'center',
            px: 0.5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checkbox />
            <Typography>Tất cả (1 sản phẩm)</Typography>
          </Box>
          <Typography>Đơn giá</Typography>
          <Typography>Số lượng</Typography>
          <Typography>Thành tiền</Typography>
          <IconButton>
            <Delete />
          </IconButton>
        </Box>
      </Paper>
      <CartStore />
      <CartStore />
    </Box>
  );
}
