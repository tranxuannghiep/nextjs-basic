import * as React from 'react';
import { Box, Stack, Link as MuiLink } from '@mui/material';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  return (
    <Box display={{ xs: 'none', sm: 'block' }} py={2}>
      <Stack direction="row" justifyContent="flex-end">
        {ROUTE_LIST.map((route) => (
          <Link key={route.path} href={route.path} passHref>
            <MuiLink sx={{ ml: 2 }} component="span">
              {route.label}
            </MuiLink>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
