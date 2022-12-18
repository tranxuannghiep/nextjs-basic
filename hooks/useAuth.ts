import { authApi } from 'api-client';
import useSWR from 'swr';
import type { PublicConfiguration, BareFetcher } from 'swr/_internal';

export const useAuth = (options?: Partial<PublicConfiguration<any, any, BareFetcher<any>>>) => {
  //profile
  const {
    data: profile,
    error,
    mutate,
    isLoading,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const isFirstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: 'david',
      password: '123123',
    });
    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    isLoading,
    isFirstLoading,
    login,
    logout,
  };
};
