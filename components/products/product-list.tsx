import { ProductType } from '@/models';
import { Box, Grid } from '@mui/material';
import * as React from 'react';
import { Product } from './product';

export interface IProductListProps {
  productList: ProductType[];
}

export function ProductList({ productList }: IProductListProps) {
  return (
    <Box>
      <Grid container spacing={1.5}>
        {productList.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
