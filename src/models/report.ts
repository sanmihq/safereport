export interface Report {
  category: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  address?: string;
  mediaUrl?: string;
  createdBy: string;
  createdAt: number;
  upvotes: number;
  downvotes: number;
  commentCount: number;
}
