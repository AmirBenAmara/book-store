export interface Publisher {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface PublisherList {
  total: number;
  data: Publisher[];
}
