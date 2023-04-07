import { Box, LinearProgress, linearProgressClasses, Typography } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { formatPriceToK, PROMOTION } from '@/utils';

export interface ProcessBarPriceProps {
  discountPrice: number;
  currentPrice: number;
  tier: number;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background:
      theme.palette.mode === 'light'
        ? 'linear-gradient(90deg, rgb(0, 173, 87) 0%, rgb(119, 218, 144) 105.65%)'
        : '#ebebf0',
  },
}));

const BottomTextProgress = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '17px',
  fontSize: '11px',
  color: '#808089',
}));

const TopTextProgress = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '-17px',
  fontSize: '11px',
  color: '#808089',
  '&.active': {
    color: '#089148',
    fontWeight: '500',
  },
}));

export function ProcessBarPrice({ discountPrice, currentPrice, tier }: ProcessBarPriceProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (currentPrice > PROMOTION.TIER_SECOND_PRICE.BUY_PRICE) setPercent(100);
    else setPercent((currentPrice / PROMOTION.TIER_SECOND_PRICE.BUY_PRICE) * 100);
  }, [currentPrice]);

  return (
    <Box
      sx={{
        pb: 4,
        pl: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '500px',
          position: 'relative',
          mr: 2,
          flex: 1,
        }}
      >
        <BorderLinearProgress variant="determinate" value={percent} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Box position="relative" height="16px">
            <BottomTextProgress>Mua</BottomTextProgress>
          </Box>
          <Box className={`circle-price ${tier === 1 && 'active'}`} position="relative">
            <TopTextProgress className={`${tier === 1 && 'active'}`}>-10k</TopTextProgress>
            {tier === 1 && <CheckOutlinedIcon sx={{ fontSize: '12px', color: '#089148' }} />}
            <BottomTextProgress>149K</BottomTextProgress>
          </Box>
          <Box className={`circle-price ${tier === 2 && 'active'}`} position="relative">
            <TopTextProgress className={`${tier === 2 && 'active'}`}>-20k</TopTextProgress>
            {tier === 2 && <CheckOutlinedIcon sx={{ fontSize: '12px', color: '#089148' }} />}
            <BottomTextProgress>299K</BottomTextProgress>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            md: 'flex',
            sm: 'none',
            xs: 'none',
          },
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '76px',
            height: '24px',
          }}
        >
          <Image
            src="https://salt.tikicdn.com/ts/upload/77/9a/0d/601353ce6c8255e009706cdae74d01de.png"
            alt="Free ship"
            fill={true}
          />
        </Box>
        {discountPrice > 0 && (
          <Typography variant="caption" ml={1} fontWeight="500" color="#089148">
            Yay! Bạn đã được Freeship {formatPriceToK(discountPrice)}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
