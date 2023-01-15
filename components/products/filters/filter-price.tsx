import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Wrapped = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

const Range = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  maxWidth: 200,

  '&>span': {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export function FilterByPrice() {
  return (
    <Wrapped>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
      <Range>
        <TextField name="salePrice_gte" size="small" />
        <span>-</span>
        <TextField name="salePrice_lte" size="small" />
      </Range>
      <Button variant="outlined">Áp dụng</Button>
    </Wrapped>
  );
}
