import { CartType } from '@/store/store-cart';
import { formatPriceToK, getTierPricePromotion, PROMOTION } from '@/utils';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Box, Button, Checkbox, Paper, Typography } from '@mui/material';
import { intersectionWith, isEqual } from 'lodash';
import Link from 'next/link';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { CartItem } from './cart-item';
import { ProcessBarPrice } from './process-bar-price';

export interface CartStoreProps {
  books: CartType[];
  storeName: string;
}

export function CartStore({ books, storeName }: CartStoreProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { currentPrice, discountPrice, priceBuyNextLevel, discountPriceNextLevel, tier } =
    useMemo(() => {
      const totalPrice = books.reduce((acc, book) => {
        if (selectedIds.includes(book.id as number)) return acc + book.price * book.quantity;
        else return acc;
      }, 0);
      return getTierPricePromotion(totalPrice);
    }, [books, selectedIds]);

  const handleChangeSelectAll = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) setSelectedIds(books.map((book) => book.id as number));
    else setSelectedIds([]);
  };

  useEffect(() => {
    const newSelectIds = intersectionWith(selectedIds, books, (id, book) => id === book.id);
    const isChange = isEqual(newSelectIds.sort(), selectedIds.sort());

    if (!isChange) {
      setSelectedIds(newSelectIds);
    }
  }, [books, selectedIds]);

  return (
    <Paper elevation={0} sx={{ mb: 1.5 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 1.5,
        }}
      >
        <Checkbox
          checked={selectedIds.length === books.length && selectedIds.length > 0}
          onChange={handleChangeSelectAll}
        />
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
              {storeName}
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
      <ProcessBarPrice discountPrice={discountPrice} currentPrice={currentPrice} tier={tier} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          pb: 2,
        }}
      >
        {discountPriceNextLevel !== 0 ? (
          <>
            <Typography variant="body2" mr={1}>
              Để nhận Freeship {formatPriceToK(discountPriceNextLevel)}.
            </Typography>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', fontWeight: '300' }}
              size="small"
              color="info"
            >
              Mua thêm {formatPriceToK(priceBuyNextLevel)}
            </Button>
          </>
        ) : (
          <Typography variant="body2">
            Mua hàng để được Freeship {formatPriceToK(PROMOTION.TIER_SECOND_PRICE.DISCOUNT_PRICE)}{' '}
            thôi nào.
          </Typography>
        )}
      </Box>
      {books.map((book) => (
        <CartItem
          key={book.id}
          book={book}
          setSelectedIds={setSelectedIds}
          selectedIds={selectedIds}
        />
      ))}
    </Paper>
  );
}
