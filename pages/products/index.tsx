import { MainLayout } from '@/components/layout';
import { ProductFilters, ProductList } from '@/components/products';
import { ProductSort } from '@/components/products/product-sort';
import { Box, Container, Grid, Pagination, Paper } from '@mui/material';

const productList = [
  {
    id: '1',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
    ],
  },
  {
    id: '2',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
    ],
  },
  {
    id: '6',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
    ],
  },
  {
    id: '3',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
    ],
  },
  {
    id: '4',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
    ],
  },
  {
    id: '5',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
    ],
  },
];

export default function ProductsPage() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={1.5} flexWrap="nowrap">
          <Grid item minWidth={250}>
            <Paper elevation={0}>
              <ProductFilters />
            </Paper>
          </Grid>
          <Grid item flexGrow={1}>
            <ProductSort />
            <ProductList productList={productList} />
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
      </Container>
    </Box>
  );
}

ProductsPage.Layout = MainLayout;
