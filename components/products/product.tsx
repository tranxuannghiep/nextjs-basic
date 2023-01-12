import { ProductType } from '@/models';
import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface ProductProps {
  product: ProductType;
}

export function Product({ product }: ProductProps) {
  return (
    <Paper elevation={0}>
      <Link href={`/products/${product.id}`}>
        <Box padding={1}>
          <Image src={product.image[0]} alt="product image" width={150} height={150} />
        </Box>
        <Typography>{product.title}</Typography>
        <Typography>{product.price}</Typography>
      </Link>
    </Paper>
  );
}
