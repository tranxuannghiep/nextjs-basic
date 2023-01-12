import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const MenuCategory = styled('ul')(({ theme }) => ({
  padding: 0,
  margin: 0,
  listStyleType: 'none',

  '& > li': {
    marginTop: theme.spacing(1),
    transition: 'all .25s',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export function FilterByCategory() {
  return (
    <Box padding={2}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <MenuCategory>
        <li>
          <Typography variant="body2">Danh mục 1</Typography>
        </li>
        <li>
          <Typography variant="body2">Danh mục 2</Typography>
        </li>
        <li>
          <Typography variant="body2">Danh mục 3</Typography>
        </li>
      </MenuCategory>
    </Box>
  );
}
