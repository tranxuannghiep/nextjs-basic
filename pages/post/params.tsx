import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPageProps {}

export default function ParamsPage(props: ParamsPageProps) {
  const router = useRouter();

  return (
    <div>
      Params page
      <p>Query {JSON.stringify(router.query)}</p>
    </div>
  );
}
