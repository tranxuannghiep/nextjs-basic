import { LoginForm } from '@/components/auth';
import { MainLayout } from '@/components/layout';
import { LoginPayload } from '@/models';
import { Box, Paper, Typography } from '@mui/material';
import { useAuth } from 'hooks';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { login, logout, profile, isLoading } = useAuth({
    revalidateOnMount: false,
  });
  const router = useRouter();

  // const handleLoginClick = async () => {
  //   try {
  //     await login();
  //     console.log('redirect to dashboard');
  //     router.push('/about');
  //   } catch (error) {}
  // };

  // const handleLogoutClick = async () => {
  //   try {
  //     await logout();
  //   } catch (error) {}
  // };

  const handleSubmit = async (values: LoginPayload) => {
    try {
      await login(values);
      router.replace(
        (router.query.redirect && decodeURIComponent(router.query.redirect as string)) || '/'
      );
      // if (window.history.length > 1 && document.referrer.indexOf(window.location.host) !== -1) {
      //   router.back();
      // } else {
      //   router.replace('/');
      // }
    } catch (error) {}
  };
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          mx: 'auto',
          mt: 8,
          p: 4,
          maxWidth: '480px',
          textAlign: 'center',
        }}
      >
        {/* <h1>Login Page</h1>
      {isLoading && <p>Loading...</p>} */}
        {/* <p>{JSON.stringify(profile || {}, null, 2)}</p> */}
        <Typography component="h1" variant="h5" mb={4}>
          Login
        </Typography>
        <LoginForm onSubmit={handleSubmit} />
        {/* <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>About</button> */}
      </Paper>
    </Box>
  );
}
LoginPage.Layout = MainLayout;
