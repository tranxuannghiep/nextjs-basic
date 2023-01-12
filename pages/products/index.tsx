import { MainLayout } from '@/components/layout';
import { ProductFilters, ProductList } from '@/components/products';
import { Box, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const Pagination = styled(Grid)(
  () => `
    pagination: {
      display: flex,
      flexFlow: row nowrap,
      justifyContent: center,
      marginTop: 30px,
      paddingBottom: 20px,
    },`
);

const productList = [
  {
    id: '1',
    title: 'Dac nhan tam',
    description: 'Dac nhan tam',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg',
    ],
  },
  {
    id: '2',
    title: 'Dac nhan tam',
    description: 'Dac nhan tam',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg',
    ],
  },
  {
    id: '6',
    title: 'Dac nhan tam',
    description: 'Dac nhan tam',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg',
    ],
  },
  {
    id: '3',
    title: 'Dac nhan tam',
    description: 'Dac nhan tam',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg',
    ],
  },
  {
    id: '4',
    title: 'Dac nhan tam',
    description: 'Dac nhan tam',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg',
    ],
  },
  {
    id: '5',
    title: 'Dac nhan tam',
    description: 'Dac nhan tam',
    price: 12,
    image: [
      'https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg',
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
            <ProductList productList={productList} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ProductsPage.Layout = MainLayout;
