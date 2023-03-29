import { ListResponse, ProductType } from '@/models';
import axiosClient from './axiosClient';

export const productApi = {
  async getAll(): Promise<ListResponse<ProductType>> {
    return axiosClient.get('/book/all');
  },
};
