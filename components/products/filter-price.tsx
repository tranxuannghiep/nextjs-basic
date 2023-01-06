import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    root: {
      padding: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    range: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      '&>span': {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
    },
  };
});

export function FilterByPrice() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
      <Box className={classes.range}>
        <TextField name="salePrice_gte" size="small" />
        <span>-</span>
        <TextField name="salePrice_lte" size="small" />
      </Box>
      <Button variant="outlined">Áp dụng</Button>
    </Box>
  );
}
