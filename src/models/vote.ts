export interface Vote {
  id: string;
  reportId: string;
  userId: string;
  value: 1 | -1;
  createdAt: number;
}
