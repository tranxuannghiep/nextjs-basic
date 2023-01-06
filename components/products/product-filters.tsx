import { Box } from '@mui/material';
import { FilterByCategory } from './filter-category';
import { FilterByPrice } from './filter-price';

export function ProductFilters() {
  return (
    <Box>
      <FilterByCategory />
      <FilterByPrice />
    </Box>
  );
}
