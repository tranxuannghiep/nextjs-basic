import { ProductType } from '@/models';
import { Box, Divider, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/system';

export interface ProductProps {
  product: ProductType;
}

const ProductWrapped = styled(Paper)(({ theme }) => ({
  borderRadius: '4px',
  height: '100%',
  '&:hover': {
    boxShadow: 'rgb(0,0,0,0.1) 0px 0px 20px',
  },
  '&> .product-item': {
    height: '100%',
  },
}));

export function Product({ product }: ProductProps) {
  return (
    <ProductWrapped elevation={0}>
      <Link href={`/products/${product.id}`} className="product-item">
        <Box className="thumbnail" sx={{ pt: '100%', position: 'relative', width: '100%' }}>
          <Image src={product.image[0]} alt="product image" fill={true} />
        </Box>
        <Box className="info" sx={{ p: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="body1"
            component="h6"
            color="secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            component="h6"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: '2',
              lineClamp: '2',
              wordWrap: 'break-word',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              flexGrow: '1',
            }}
          >
            {product.description}
          </Typography>
          <Typography color="primary" component="h6" variant="h6" pt={0.5}>
            {product.price}.000
          </Typography>
        </Box>
        <Divider />
        <Box className="badge-delivery" p={1}>
          <Typography variant="body2" component="h6" color="GrayText">
            Giao thứ 4, ngày 18/01
          </Typography>
        </Box>
      </Link>
    </ProductWrapped>
  );
}
