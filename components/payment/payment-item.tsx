import { CartType } from '@/store/store-cart';
import { CONFIG, formatPrice } from '@/utils';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export interface PaymentItemProps {
  cart: CartType;
}

export function PaymentItem({ cart }: PaymentItemProps) {
  return (
    <Box py={1.5} display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Box
          sx={{
            position: 'relative',
            width: '48px',
            height: '48px',
          }}
        >
          <Image src={cart.images?.[0] || CONFIG.DEFAULT_IMAGE} alt="item" fill={true} />
        </Box>
      </Box>
      <Box ml={2} flex="1">
        <Typography
          variant="body2"
          color="GrayText"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: '1',
            lineClamp: '1',
            wordWrap: 'break-word',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {cart.title}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={0.5}>
          <Typography variant="body2" color="GrayText">
            SL: x{cart.amount}
          </Typography>
          <Typography variant="body2" fontWeight="500">
            {formatPrice(cart.amount * cart.price)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
