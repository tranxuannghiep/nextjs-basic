import { productApi } from '@/api-client';
import { ListResponse, ProductType } from '@/models';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

export function useProducts(
  params?: string,
  options?: Partial<UseQueryOptions<any, AxiosError, ListResponse<ProductType>, any>>
) {
  const {
    isLoading,
    data: dataProduct,
    error,
  } = useQuery(['products', params], productApi.getAll, {
    refetchOnWindowFocus: false,
    retry: false,
    ...options,
  });

  return { dataProduct, isLoading, error };
}
