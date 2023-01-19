import { Box, Grid, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Image from 'next/image';
import { PaymentItem } from './payment-item';

export interface PaymentStoreProps {}

export function PaymentStore(props: PaymentStoreProps) {
  return (
    <Box
      sx={{
        border: '1px solid #dddde3',
        borderRadius: 3,
        p: 2,
        mt: 6,
        position: 'relative',
      }}
    >
      <Grid container flexWrap="nowrap" spacing={4}>
        <Grid item width="500px">
          <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  position: 'relative',
                  width: '32px',
                  height: '14px',
                }}
              >
                <Image
                  src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"
                  alt="fast"
                  fill={true}
                />
              </Box>
              <Typography variant="caption" mx={0.5} textTransform="uppercase" lineHeight="1.5">
                Giao Tiết Kiệm
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" color="GrayText" sx={{ textDecoration: 'line-through' }}>
                14.000 ₫
              </Typography>
              <Typography variant="body2" color="#00ab56" fontWeight="500" ml={1}>
                MIỄN PHÍ
              </Typography>
            </Box>
          </Box>
          <PaymentItem />
          <PaymentItem />
        </Grid>
        <Grid item flex={1}>
          <Box
            sx={{
              display: 'flex',
              background: '#f5f5fa',
              borderRadius: '8px',
              p: '8px 16px',
            }}
          >
            <LocalShippingOutlinedIcon sx={{ fontSize: '20px', color: '#555' }} />
            <Typography variant="body2" color="GrayText" ml={1.5}>
              Được giao bởi TikiNOW Smart Logistics
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '12px',
          transform: 'translateY(-50%)',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          px: 1,
        }}
      >
        <Box sx={{ position: 'relative', width: '24px', height: '24px' }}>
          <Image
            src="https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png"
            alt="item"
            fill={true}
          />
        </Box>
        <Typography variant="body2" color="#079449">
          Gói 1: Giao vào Thứ Bảy, 28/01
        </Typography>
      </Box>
    </Box>
  );
}
