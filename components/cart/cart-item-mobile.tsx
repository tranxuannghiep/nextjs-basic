import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import Remove from '@mui/icons-material/Remove';
import { Box, Checkbox, Divider, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

export interface CartItemMobileProps {}

export function CartItemMobile(props: CartItemMobileProps) {
  return (
    <Box
      sx={{
        display: {
          md: 'none',
          sm: 'block',
          xs: 'bloxk',
        },
        px: 0.5,
        py: 2,
      }}
    >
      <Box display="flex" alignItems="center">
        <Checkbox />
        <Box display="flex" alignItems="center" flex={1}>
          <Box
            sx={{
              width: '80px',
              height: '80px',
              position: 'relative',
              objectFit: 'contain',
              cursor: 'pointer',
            }}
          >
            <Image
              src="https://salt.tikicdn.com/cache/w78/ts/product/35/be/8a/22d9d7fb159052f319f0096d64530aa1.png.webp"
              alt="Image"
              fill={true}
            />
          </Box>
          <Box pl={2} pr={1} flex={1}>
            <Typography
              variant="caption"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: '2',
                lineClamp: '2',
                wordWrap: 'break-word',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
              }}
            >
              Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '24px',
                  height: '10px',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"
                  alt="fast"
                  fill={true}
                />
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: 1,
                  my: 'auto',
                  height: '10px',
                }}
              />
              <Typography component="h6" variant="caption" color="#00ab56" fontWeight="500">
                Giao tiết kiệm
              </Typography>
            </Box>
            <Typography color="primary">350.000 ₫</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '4px',
                  border: '1px solid #f2f2f2',
                  width: '80px',
                  height: '24px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    borderRight: '1px solid #f2f2f2',
                    width: '25px',
                  }}
                >
                  <Remove fontSize="small" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flex: '1',
                  }}
                >
                  1
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    borderLeft: '1px solid #f2f2f2',
                    width: '25px',
                  }}
                >
                  <Add fontSize="small" />
                </Box>
              </Box>
              <Typography variant="body2" color="secondary" sx={{ cursor: 'pointer' }}>
                Xoá
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
