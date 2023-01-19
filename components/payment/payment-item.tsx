import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export interface PaymentItemProps {}

export function PaymentItem(props: PaymentItemProps) {
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
          <Image
            src="https://salt.tikicdn.com/cache/96x96/ts/product/35/be/8a/22d9d7fb159052f319f0096d64530aa1.png"
            alt="item"
            fill={true}
          />
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
          Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={0.5}>
          <Typography variant="body2" color="GrayText">
            SL: x3
          </Typography>
          <Typography variant="body2" fontWeight="500">
            175.000 ₫
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
