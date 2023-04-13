import { Box, Grid, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Image from 'next/image';
import { PaymentItem } from './payment-item';
import { CartType } from '@/store/store-cart';
import { formatPrice, getTierPricePromotion, PROMOTION } from '@/utils';
import { useMemo } from 'react';

export interface PaymentStoreProps {
  nameStore: string;
  carts: CartType[];
  index: number;
}

export function PaymentStore({ nameStore, carts, index }: PaymentStoreProps) {
  const totalPrice = useMemo(() => {
    return carts.reduce((acc, val) => acc + val.price * val.amount, 0);
  }, [carts]);

  const { discountPrice } = getTierPricePromotion(totalPrice);

  return (
    <Box
      sx={{
        border: '1px solid #dddde3',
        borderRadius: 3,
        p: {
          md: 2,
          sm: 1,
          xs: 1,
        },
        mt: 6,
        position: 'relative',
      }}
    >
      <Grid container flexWrap="nowrap" spacing={4}>
        <Grid
          item
          sx={{
            width: {
              md: '500px',
              sm: '100%',
              xs: '100%',
            },
          }}
        >
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
              {discountPrice === 0 ? (
                <Typography variant="body2" color="GrayText">
                  {formatPrice(PROMOTION.TIER_SECOND_PRICE.DISCOUNT_PRICE)}
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="body2"
                    color="GrayText"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    {formatPrice(PROMOTION.TIER_SECOND_PRICE.DISCOUNT_PRICE)}
                  </Typography>
                  <Typography variant="body2" color="#00ab56" fontWeight="500" ml={1}>
                    {discountPrice === PROMOTION.TIER_SECOND_PRICE.DISCOUNT_PRICE
                      ? 'MIỄN PHÍ'
                      : formatPrice(discountPrice)}
                  </Typography>
                </>
              )}
            </Box>
          </Box>
          {carts.map((cart) => (
            <PaymentItem key={cart.id} cart={cart} />
          ))}
          <Box
            sx={{
              display: {
                md: 'none',
                sm: 'block',
                xs: 'block',
              },
              background: '#fafafa',
              padding: '6px 8px',
              borderRadius: '0px 0px 12px 12px',
              m: '16px -8px -8px',
            }}
          >
            <Typography variant="body2" color="GrayText">
              Được giao bởi TikiNOW Smart Logistics
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          flex={1}
          sx={{
            display: {
              md: 'block',
              sm: 'none',
              xs: 'none',
            },
          }}
        >
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
          Gói {index + 1}: Giao vào Thứ Bảy, 28/01
        </Typography>
      </Box>
    </Box>
  );
}
