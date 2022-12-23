import * as React from 'react';
import { IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function HeaderMobile() {
  return (
    <Stack direction="row" display={{ xs: 'flex', sm: 'none' }} justifyContent="flex-end" py={2}>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Stack>
  );
}
