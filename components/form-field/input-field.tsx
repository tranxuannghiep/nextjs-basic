import { TextField, TextFieldProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';

export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};

export function InputField({
  name,
  control,
  ref: externalRef,
  value: externalValue,
  onChange: externalOnchange,
  onBlur: externalOnBlur,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { onChange, value, onBlur, ref },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      size="small"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      {...inputProps}
    />
  );
}
