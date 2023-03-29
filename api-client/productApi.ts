import { DataResponse, ListResponse, ProductType } from '@/models';
import { QueryFunctionContext } from 'react-query';
import axiosClient from './axiosClient';

export const productApi = {
  async getAll(): Promise<ListResponse<ProductType>> {
    return axiosClient.get('/book/all');
  },
  async productDetail({
    queryKey,
  }: QueryFunctionContext<string[], any>): Promise<DataResponse<ProductType>> {
    const productId = queryKey[1];
    return axiosClient.get(`/book/${productId}`);
  },
};
