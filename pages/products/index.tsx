import { MainLayout } from '@/components/layout';
import { ProductFilters, ProductList } from '@/components/products';
import { ProductSort } from '@/components/products/product-sort';
import { Box, Grid, Pagination, Paper } from '@mui/material';

const productList = [
  {
    id: '1',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/21/94/98/30e0f06bd9075364dc2c9169dbcbdf0d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/3f/bc/2a/69d885310f1ea545a7bd10cfce23fc53.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/ea/80/aa/76487dc3664207976a100b4b1b932cd6.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/c5/9a/8a/5d2f788f442705be94b5f5b3c1f3072d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/ea/80/aa/becf674be5294be90a47551c68191737.jpg',
    ],
  },
  {
    id: '2',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/21/94/98/30e0f06bd9075364dc2c9169dbcbdf0d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/3f/bc/2a/69d885310f1ea545a7bd10cfce23fc53.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/ea/80/aa/76487dc3664207976a100b4b1b932cd6.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/c5/9a/8a/5d2f788f442705be94b5f5b3c1f3072d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/ea/80/aa/becf674be5294be90a47551c68191737.jpg',
    ],
  },
  {
    id: '6',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/21/94/98/30e0f06bd9075364dc2c9169dbcbdf0d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/3f/bc/2a/69d885310f1ea545a7bd10cfce23fc53.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/ea/80/aa/76487dc3664207976a100b4b1b932cd6.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/c5/9a/8a/5d2f788f442705be94b5f5b3c1f3072d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/ea/80/aa/becf674be5294be90a47551c68191737.jpg',
    ],
  },
  {
    id: '3',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/21/94/98/30e0f06bd9075364dc2c9169dbcbdf0d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/3f/bc/2a/69d885310f1ea545a7bd10cfce23fc53.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/ea/80/aa/76487dc3664207976a100b4b1b932cd6.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/c5/9a/8a/5d2f788f442705be94b5f5b3c1f3072d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/ea/80/aa/becf674be5294be90a47551c68191737.jpg',
    ],
  },
  {
    id: '4',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/21/94/98/30e0f06bd9075364dc2c9169dbcbdf0d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/3f/bc/2a/69d885310f1ea545a7bd10cfce23fc53.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/ea/80/aa/76487dc3664207976a100b4b1b932cd6.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/c5/9a/8a/5d2f788f442705be94b5f5b3c1f3072d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/ea/80/aa/becf674be5294be90a47551c68191737.jpg',
    ],
  },
  {
    id: '5',
    title: 'Dac nhan tam',
    description: 'Trà thanh lọc cơ thể Detox D2021 SACHS TEA giúp đẹp da 16 túi lọc/40g',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/8f/8d/a9/08b2f06abf3af5c9b7b29198d2a60f34.png',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/21/94/98/30e0f06bd9075364dc2c9169dbcbdf0d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/3f/bc/2a/69d885310f1ea545a7bd10cfce23fc53.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/ea/80/aa/76487dc3664207976a100b4b1b932cd6.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/c5/9a/8a/5d2f788f442705be94b5f5b3c1f3072d.jpg',
      'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/ea/80/aa/becf674be5294be90a47551c68191737.jpg',
    ],
  },
];

export default function ProductsPage() {
  return (
    <Box>
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
    </Box>
  );
}

ProductsPage.Layout = MainLayout;
