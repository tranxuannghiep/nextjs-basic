import { CartType } from '@/store/store-cart';
import { CONFIG, formatPrice } from '@/utils';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Box, Checkbox, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface CartItemMobileProps {
  book: CartType;
  setSelectedIds: Dispatch<SetStateAction<number[]>>;
  selectedIds: number[];
}

export function CartItemMobile({ book, setSelectedIds, selectedIds }: CartItemMobileProps) {
  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) setSelectedIds((prev) => [...prev, book.id as number]);
    else setSelectedIds((prev) => prev.filter((id) => id !== book.id));
  };
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
        <Checkbox
          checked={selectedIds.includes(book.id as number)}
          onChange={handleChangeCheckbox}
        />
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
              src={book.images ? book.images[0] : CONFIG.DEFAULT_IMAGE}
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
              {book.title}
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
            <Typography color="primary">{formatPrice(book.quantity * book.price)}</Typography>
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
                  {book.quantity}
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
