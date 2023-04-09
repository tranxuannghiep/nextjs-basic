import useCartStore from '@/store/store-cart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, Divider, Link as MuiLink, Stack } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

export function HeaderDesktop() {
  const { carts } = useCartStore();

  const router = useRouter();
  return (
    <Box display={{ xs: 'none', sm: 'block' }} py={2}>
      <Stack direction="row" justifyContent="flex-end">
        {ROUTE_LIST.map((route) => (
          <Link key={route.path} href={route.path} passHref>
            <MuiLink
              sx={{ ml: 2, fontWeight: 'medium' }}
              component="span"
              className={clsx({ active: router.pathname === route.path })}
            >
              {route.label}
            </MuiLink>
          </Link>
        ))}
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Link href="/cart" passHref>
          <MuiLink component="span" className={clsx({ active: router.pathname === '/cart' })}>
            <Badge badgeContent={carts.length} color="warning">
              <ShoppingCartOutlinedIcon color="info" fontSize="small" />
            </Badge>
          </MuiLink>
        </Link>
      </Stack>
    </Box>
  );
}
