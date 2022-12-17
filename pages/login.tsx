import { authApi } from 'api-client';

export default function LoginPage() {
  const handleLoginClick = async () => {
    try {
      await authApi.login({
        username: 'assdsds',
        password: 'sddsadsd',
      });
    } catch (error) {}
  };
  const handleGetProfileClick = async () => {
    try {
      await authApi.getProfile();
    } catch (error) {}
  };
  const handleLogoutClick = async () => {
    try {
      await authApi.logout();
    } catch (error) {}
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
