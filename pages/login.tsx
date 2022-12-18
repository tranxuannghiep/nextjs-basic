import { useAuth } from 'hooks';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { login, logout, profile, isLoading } = useAuth({
    revalidateOnMount: false,
  });
  const router = useRouter();

  const handleLoginClick = async () => {
    try {
      await login();
      console.log('redirect to dashboard');
      router.push('/about');
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
      <button onClick={() => router.push('/about')}>About</button>
    </div>
  );
}
