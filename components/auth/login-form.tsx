import { LoginPayload } from '@/models';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../form-field';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface LoginFormProps {
  onSubmit?: (values: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().min(6, 'Min length is 6 characters').required('Password is required'),
  });

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleLoginSubmit = async (values: LoginPayload) => {
    onSubmit?.(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField label="Username" name="username" control={control} />
      <InputField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((x) => !x)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box mt={2}>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
}
