export interface Work {
  id: string | number;
  title: string;
  taskList: string[];
  createdAt: number;
  shortDescription: string;
  thumbnailUrl: string;
  fullDescription: string;
  updatedAt: number;
}
