import { productApi } from '@/api-client';
import { useQuery, UseQueryOptions } from 'react-query';

export const useProduct = (options?: Partial<UseQueryOptions<any, any, any, any>>) => {
  const {
    isLoading,
    data: dataProduct,
    error,
  } = useQuery('products', productApi.getAll, {
    refetchOnWindowFocus: false,
    ...options,
  });

  return { dataProduct, isLoading, error };
};
