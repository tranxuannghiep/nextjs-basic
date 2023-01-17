import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { ProductImageSwiper } from './product-image-swiper';

export interface ProductListImageProps {
  srcList: string[];
  mainSrc: string;
  setMainSrc: Dispatch<SetStateAction<string>>;
}

export function ProductListImage({ srcList, mainSrc, setMainSrc }: ProductListImageProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Box mt={2} width="100%">
      <Grid container spacing={1}>
        {srcList.slice(0, 3).map((src, index) => (
          <Grid key={index} item xs={3} sm={3}>
            <Box
              sx={{
                pt: '100%',
                position: 'relative',
                width: '100%',
                cursor: 'pointer',
                border: mainSrc === src ? '1px solid #0d5cb6' : '1px solid transparent',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
              onClick={() => setMainSrc(src)}
            >
              <Image src={src} alt="product detail" fill={true} />
            </Box>
          </Grid>
        ))}
        {srcList.length >= 4 && (
          <>
            <Grid item xs={3} sm={3}>
              <Box
                sx={{
                  pt: '100%',
                  position: 'relative',
                  width: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.9,
                  },
                }}
              >
                <Image src={srcList[3]} alt="product detail" fill={true} />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#000000b3',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={() => setShow(true)}
                >
                  <Typography variant="body2" textAlign="center" color="white" mx={1}>
                    Xem thêm {srcList.length - 3} hình
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <ProductImageSwiper show={show} setShow={setShow} srcList={srcList.slice(3)} />
          </>
        )}
      </Grid>
    </Box>
  );
}
