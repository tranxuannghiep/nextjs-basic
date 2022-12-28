import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import * as React from 'react';
import { isEmpty } from 'lodash';
export interface ProtectedRouteProps {
  children: any;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { profile } = useAuth({
    revalidateOnMount: false,
  });
  React.useEffect(() => {
    if (isEmpty(profile))
      router.push({
        pathname: '/login',
        query: { from: router.pathname },
      });
  }, [router, profile]);

  return children;
}
