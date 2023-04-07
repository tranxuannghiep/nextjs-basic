import useCartStore from '@/store/store-cart';
import Delete from '@mui/icons-material/Delete';
import { Box, Checkbox, IconButton, Paper, Typography } from '@mui/material';
import _ from 'lodash';
import { useMemo } from 'react';
import { CartStore } from './cart-store';

export interface CartLeftProps {}

export function CartLeft(props: CartLeftProps) {
  const { carts } = useCartStore();

  const cartGroup = useMemo(() => {
    const group = _(carts)
      .groupBy('seller.username')
      .map((books, username) => ({
        username,
        books,
      }))
      .value();
    return group;
  }, [carts]);

  return (
    <Box>
      <Paper elevation={0} sx={{ mb: 1.5 }}>
        <Box
          sx={{
            display: {
              md: 'grid',
              sm: 'flex',
              xs: 'flex',
            },
            gridTemplateColumns: {
              md: '398px 130px 130px 130px 30px',
              sm: 'auto',
              xs: 'auto',
            },
            alignItems: 'center',
            justifyContent: {
              md: 'auto',
              sm: 'space-between',
              xs: 'space-between',
            },
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
          <Typography
            sx={{
              display: {
                md: 'block',
                sm: 'none',
                xs: 'none',
              },
            }}
          >
            Đơn giá
          </Typography>
          <Typography
            sx={{
              display: {
                md: 'block',
                sm: 'none',
                xs: 'none',
              },
            }}
          >
            Số lượng
          </Typography>
          <Typography
            sx={{
              display: {
                md: 'block',
                sm: 'none',
                xs: 'none',
              },
            }}
          >
            Thành tiền
          </Typography>
        </Box>
      </Paper>
      {cartGroup.map((group) => (
        <CartStore key={group.username} books={group.books} storeName={group.username} />
      ))}
    </Box>
  );
}
