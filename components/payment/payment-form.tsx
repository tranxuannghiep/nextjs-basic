import { imageCartStripe } from '@/utils';
import { Box, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import Image from 'next/image';

export interface PaymentFormProps {}

export function PaymentForm(props: PaymentFormProps) {
  return (
    <Paper elevation={0} sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Chọn hình thức thanh toán</Typography>
      <Box my={2}>
        <RadioGroup>
          <Box display="flex" alignItems="center">
            <Radio color="info" sx={{ mr: 0.5 }} size="small" value={0} />
            <Box
              sx={{
                position: 'relative',
                width: '32px',
                height: '32px',
              }}
            >
              <Image
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg"
                alt="fast"
                fill={true}
              />
            </Box>
            <Typography variant="body2" ml={1.5}>
              Thanh toán tiền mặt khi nhận hàng
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Radio color="info" sx={{ mr: 0.5 }} size="small" value={1} />
            <Box
              sx={{
                position: 'relative',
                width: '32px',
                height: '32px',
              }}
            >
              <Image
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg"
                alt="fast"
                fill={true}
              />
            </Box>
            <Box ml={1.5}>
              <Typography variant="body2">Thanh toán bằng thẻ quốc tế Visa, Master, JCB</Typography>
              <Box display="flex" alignItems="center">
                {imageCartStripe.map((src, index) => (
                  <Box key={index}>
                    <Box sx={{ position: 'relative', width: '24px', height: '24px' }}>
                      <Image src={src} alt="visa-cart" fill={true} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </RadioGroup>
      </Box>
    </Paper>
  );
}
