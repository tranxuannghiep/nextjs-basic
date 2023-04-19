import { Seo } from '@/components/common/seo';
import { MainLayout } from '@/components/layout';
import { ProductFilters, ProductList } from '@/components/products';
import { ProductSort } from '@/components/products/product-sort';
import { Progress } from '@/components/progress/Progress';
import { useProducts } from '@/hooks';
import { Box, Grid, Pagination, Paper } from '@mui/material';

export default function ProductsPage() {
  const { dataProduct, isLoading } = useProducts();
  return (
    <Box>
      <Progress isAnimating={isLoading} />
      <Seo
        data={{
          title: 'Products',
          description: 'All products of page',
          url: `${process.env.HOST_URL}/products`,
          thumbnailUrl:
            'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />
      <Grid
        container
        spacing={1.5}
        flexWrap="nowrap"
        flexDirection={{
          md: 'row',
          sm: 'column',
          xs: 'column',
        }}
      >
        <Grid
          item
          sx={{
            minWidth: {
              md: '250px',
              sm: '100%',
              xs: '100%',
            },
          }}
        >
          <Paper elevation={0}>
            <ProductFilters />
          </Paper>
        </Grid>
        <Grid item flexGrow={1}>
          <ProductSort />
          <ProductList productList={dataProduct?.data || []} />
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              mt: '30px',
              pb: '20px',
            }}
          >
            <Pagination count={6} color="primary" onChange={() => {}} page={1} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

ProductsPage.Layout = MainLayout;
