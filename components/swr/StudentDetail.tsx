import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailProps {
  studentId: string;
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating, isLoading } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  });
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      Name: {data?.name || '--'}
    </div>
  );
}
