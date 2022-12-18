import { authApi } from 'api-client';
import { useAuth } from 'hooks';

export default function LoginPage() {
  const { login, logout, profile, isLoading } = useAuth({
    revalidateOnMount: false,
  });

  const handleLoginClick = async () => {
    try {
      await login();
      console.log('redirect to dashboard');
    } catch (error) {}
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
    } catch (error) {}
  };
  return (
    <div>
      <h1>Login Page</h1>
      {isLoading && <p>Loading...</p>}
      <p>{JSON.stringify(profile || {}, null, 2)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
