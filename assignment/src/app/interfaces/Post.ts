export interface IPost {
  _id?: String;
  title?: String;
  content?: String;
  author?: String;
  categoryId?: {
    id?: string;
    name: string;
  };
  image?: string;
  createdAt?: String;
  updatedAt?: String;
}
