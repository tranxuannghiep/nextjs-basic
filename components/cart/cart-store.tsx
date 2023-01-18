import { Box, Button, Paper, Typography, Checkbox } from '@mui/material';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { CartItem } from './cart-item';
import { ProcessBarPrice } from './process-bar-price';
import Link from 'next/link';

export interface CartStoreProps {}

export function CartStore(props: CartStoreProps) {
  return (
    <Paper elevation={0} sx={{ mb: 1.5 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 1.5,
        }}
      >
        <Checkbox />
        <Link href="/products" passHref>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StorefrontOutlinedIcon
              sx={{
                fontSize: '18px',
                color: 'darkgrey',
              }}
            />
            <Typography component="h6" variant="body2" fontWeight="500" mx={1} lineHeight="1.5">
              Tiki Trading
            </Typography>
            <ArrowForwardIosOutlinedIcon
              sx={{
                fontSize: '14px',
                color: 'darkgray',
              }}
            />
          </Box>
        </Link>
      </Box>
      <ProcessBarPrice />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          pb: 2,
        }}
      >
        <Typography variant="body2" mr={1}>
          Để nhận Freeship 20K.
        </Typography>
        <Button
          variant="outlined"
          sx={{ textTransform: 'none', fontWeight: '300' }}
          size="small"
          color="info"
        >
          Mua thêm 25K
        </Button>
      </Box>
      <CartItem />
    </Paper>
  );
}
