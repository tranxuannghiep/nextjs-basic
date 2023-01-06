import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    root: {
      padding: theme.spacing(2),
    },

    menu: {
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
    },
  };
});

export function FilterByCategory() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        <li>
          <Typography variant="body2">Danh mục 1</Typography>
        </li>
        <li>
          <Typography variant="body2">Danh mục 2</Typography>
        </li>
        <li>
          <Typography variant="body2">Danh mục 3</Typography>
        </li>
      </ul>
    </Box>
  );
}
