import { Tab, Tabs } from '@mui/material';

export interface ProductSortProps {}

export function ProductSort(props: ProductSortProps) {
  return (
    <Tabs aria-label="disabled tabs example">
      <Tab label="Giá thấp tới cao" />
      <Tab label="Giá cao xuống thấp" />
    </Tabs>
  );
}
