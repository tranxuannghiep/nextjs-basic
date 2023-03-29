import { productApi } from '@/api-client';
import { DataResponse, ProductType } from '@/models';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

export function useProductDetail(
  productId: string,
  options?: Partial<UseQueryOptions<any, AxiosError, DataResponse<ProductType>, any>>
) {
  const { isLoading, data, error } = useQuery(
    [`product-detail`, productId],
    productApi.productDetail,
    {
      refetchOnWindowFocus: false,
      retry: false,
      ...options,
    }
  );

  return { data, isLoading, error };
}
