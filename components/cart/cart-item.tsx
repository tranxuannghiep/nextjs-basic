import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import Remove from '@mui/icons-material/Remove';
import { Box, Checkbox, Divider, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

export interface CartItemProps {}

export function CartItem(props: CartItemProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '398px 130px 130px 130px 30px',
        alignItems: 'center',
        px: 0.5,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Checkbox />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
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
          <Box pl={2} pr={1} width="calc(100% - 100px)">
            <Typography
              variant="body2"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: '3',
                lineClamp: '3',
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
                  width: '32px',
                  height: '14px',
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
              <Typography component="h6" variant="body2" color="#00ab56" fontWeight="500">
                Giao tiết kiệm
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography>175.000 ₫</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '4px',
          border: '1px solid #f2f2f2',
          maxWidth: '100px',
          height: '30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderRight: '1px solid #f2f2f2',
            width: '30px',
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
            width: '30px',
          }}
        >
          <Add fontSize="small" />
        </Box>
      </Box>
      <Typography color="primary">350.000 ₫</Typography>
      <IconButton>
        <Delete />
      </IconButton>
    </Box>
  );
}
