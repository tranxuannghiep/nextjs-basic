import { DataResponse, ListResponse, ProductType } from '@/models';
import axiosCustom from './axiosCustom';

export const productApiServer = {
  async getAll(): Promise<ListResponse<ProductType>> {
    return axiosCustom.get('/book/all');
  },

  async getDetail(productId: string): Promise<DataResponse<ProductType>> {
    return axiosCustom.get(`/book/${productId}`);
  },
};
