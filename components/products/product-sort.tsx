import { Tab, Tabs } from '@mui/material';

export interface ProductSortProps {}

export function ProductSort(props: ProductSortProps) {
  return (
    <Tabs aria-label="disabled tabs example" value={0}>
      <Tab label="Giá thấp tới cao" value={0} />
      <Tab label="Giá cao xuống thấp" value={1} />
    </Tabs>
  );
}
