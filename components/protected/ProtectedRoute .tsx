import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import * as React from 'react';
import { isEmpty } from 'lodash';
import { LinearProgress } from '@mui/material';
export interface ProtectedRouteProps {
  children: any;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const { profile } = useAuth({
    revalidateOnMount: false,
  });
  React.useEffect(() => {
    if (isEmpty(profile)) {
      router.replace({
        pathname: '/login',
        query: {
          redirect: router.asPath,
        },
      });
    }
  }, [router, profile]);

  if (!isEmpty(profile)) {
    return children;
  }

  return <LinearProgress style={{ position: 'fixed', top: 0, left: 0, width: '100%' }} />;
}
