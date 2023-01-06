import { MainLayout } from '@/components/layout';
import { ProductFilters } from '@/components/products';
import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    root: {},

    left: {
      width: '250px',
    },
    right: {
      flex: '1 1 0',
    },
    pagination: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      marginTop: '30px',
      paddingBottom: '20px',
    },
  };
});

export default function ProductsPage() {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <h1>hello</h1>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ProductsPage.Layout = MainLayout;
