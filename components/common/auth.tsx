// interface
import { useAuth } from 'hooks';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useEffect } from 'react';

export function Auth({ children }: { children: ReactElement }) {
  const { profile, isFirstLoading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isFirstLoading && !profile?.username) {
      router.push('/login');
    }
  }, [router, profile, isFirstLoading]);
  if (!profile?.username) return <p>Loading...</p>;
  return <div>{children}</div>;
}
