import { ProductType } from '@/models';
import { Box, Grid } from '@mui/material';
import * as React from 'react';
import { Product } from './product';

export interface IProductListProps {
  productList: ProductType[];
}

export function ProductList({ productList }: IProductListProps) {
  return (
    <Box mt={1}>
      <Grid container spacing={1.5}>
        {productList.map((product) => (
          <Grid key={product.id} item xs={6} sm={4} md={3} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
