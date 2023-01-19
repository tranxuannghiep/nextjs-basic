import { Box } from '@mui/material';
import { DeliveryForm } from './delivery-form';
import { PaymentForm } from './payment-form';

export interface PaymentLeftProps {}

export function PaymentLeft(props: PaymentLeftProps) {
  return (
    <Box>
      <DeliveryForm />
      <PaymentForm />
    </Box>
  );
}
