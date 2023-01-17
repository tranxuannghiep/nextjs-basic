import { Box, Container, IconButton } from '@mui/material';
import { Dispatch, SetStateAction, useState, CSSProperties } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

export interface ProductImageSwiperProps {
  srcList: string[];
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export function ProductImageSwiper({ show, setShow, srcList }: ProductImageSwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <Box
      sx={{
        display: show ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.95)',
        padding: '20px',
      }}
    >
      <Container sx={{ height: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 2,
          }}
        >
          <IconButton onClick={() => setShow(false)}>
            <CloseIcon color="primary" fontSize="large" />
          </IconButton>
        </Box>
        <Box sx={{ height: '100%' }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="calc(100% - 40px)"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '1',
              }}
            >
              <Box
                sx={{
                  width: '600px',
                  margin: '0 auto',
                }}
              >
                <Swiper
                  cssMode={true}
                  style={
                    {
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                      height: '100%',
                      padding: '20px 100px 40px',
                    } as CSSProperties
                  }
                  navigation={true}
                  thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                  }}
                  modules={[Navigation, Thumbs]}
                >
                  {srcList.map((src, index) => (
                    <SwiperSlide key={index}>
                      <Box sx={{ width: '100%', paddingTop: '100%' }}>
                        <Image src={src} alt="image" fill={true} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
            <Box
              sx={{
                flex: '0 0 130px',
                justifySelf: 'flex-end',
                display: {
                  md: 'block',
                  sm: 'none',
                  xs: 'none',
                },
              }}
            >
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                slidesPerView={7}
                modules={[Navigation, Thumbs]}
              >
                {srcList.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        maxWidth: '100px',
                        height: '100px',
                        cursor: 'pointer',
                      }}
                    >
                      <Image src={src} alt="image" fill={true} />
                      <Box className="active-item"></Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
