import useCartStore from '@/store/store-cart';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

export function CartAlertConfirm() {
  const { modalDeleteItem, setModalDeleteItem } = useCartStore();

  const handleDeleteItem = () => {
    setModalDeleteItem({
      ...modalDeleteItem,
      open: false,
    });
    modalDeleteItem.handleConfirm();
  };

  const handleClose = () => {
    setModalDeleteItem({
      ...modalDeleteItem,
      open: false,
    });
    modalDeleteItem.handleCancel();
  };

  return (
    <Dialog
      open={modalDeleteItem.open}
      disableEscapeKeyDown
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={(_, reason) => {
        if (reason !== 'backdropClick') {
          handleClose();
        }
      }}
    >
      <Box padding={1.5}>
        <DialogTitle id="alert-dialog-title" style={{ display: 'flex', alignItems: 'center' }}>
          <WarningAmberOutlinedIcon style={{ marginRight: '10px', color: '#f1c40f' }} />{' '}
          <Typography>Xóa sản phẩm</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xóa sản phẩm đang chọn?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleDeleteItem}>
            Xác nhận
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Hủy
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
