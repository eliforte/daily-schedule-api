export interface ITaks {
  _id?: string;
  userId: string | undefined;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date | null;
}
