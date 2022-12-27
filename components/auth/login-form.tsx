import { LoginPayload } from '@/models';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../form-field';

export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLoginSubmit = async (values: LoginPayload) => {
    console.log(values);
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
    </Box>
  );
}
