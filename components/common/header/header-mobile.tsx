import * as React from 'react';
import { Box } from '@mui/material';

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  return <Box display={{ xs: 'block', sm: 'none' }}>Header Mobile</Box>;
}
