import { Box, Paper, Radio, Typography } from '@mui/material';
import Image from 'next/image';
import { PaymentStore } from './payment-store';

export interface DeliveryFormProps {}

export function DeliveryForm(props: DeliveryFormProps) {
  return (
    <Paper elevation={0} sx={{ px: 2, pt: 2, pb: 4 }}>
      <Typography variant="h6">Chọn hình thức giao hàng</Typography>
      <Box my={2}>
        <Box
          sx={{
            background: '#f0f8ff',
            border: '1px solid #c2e1ff',
            p: 2,
            borderRadius: '10px',
            width: '500px',
            position: 'relative',
          }}
        >
          <Box display="flex" alignItems="center">
            <Radio checked={true} color="info" sx={{ mr: 0.5 }} size="small" />
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
            <Typography variant="body2" mx={0.5}>
              Giao Tiết Kiệm
            </Typography>
            <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', px: 0.5 }}>
              <Typography variant="body2" fontWeight="500" color="#00ab56" mr={0.5}>
                -24K
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  width: '69px',
                  height: '11px',
                }}
              >
                <Image
                  src="https://salt.tikicdn.com/ts/upload/b7/77/7d/0a981c8d05f5bec66dc057f6575d2e2f.png"
                  alt="-24k"
                  fill={true}
                />
              </Box>
            </Paper>
          </Box>
          <Typography variant="caption" color="GrayText" ml={3}>
            Có 3 sản phẩm hỗ trợ hình thức này
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              width: '32px',
              height: '12px',
              transform: 'translate(-50%, 100%)',
              left: '50%',
              bottom: '1px',
              zIndex: 1,
            }}
          >
            <Image
              src="https://salt.tikicdn.com/ts/upload/05/9e/d8/f13e86df128f19d197397e44924f9616.png"
              alt="icon arrow"
              fill={true}
            />
          </Box>
        </Box>
      </Box>
      <PaymentStore />
      <PaymentStore />
    </Paper>
  );
}
