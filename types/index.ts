export type ArticleDTO = {
  readonly id: number;
  readonly title: string;
  readonly slug: string;
  readonly body: string;
  readonly createdAt: string;
};

export interface Seo {
  title: string;
  description: string;
}

export interface GetIdPath {
  params: { id: number };
}

export interface GetSlugPath {
  params: { slug: string };
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  photo_url: string;
  auth_date: number;
  hash: string;
}

export interface TelegramPostDTO {
  title: string;
  body: string;
  price: number;
  slug: string;
  username: string;
  categoryId: number;
  images: string;
}

export interface UserDTO {
  readonly id: number;
  readonly username: string;
  readonly createdAt?: string;
}

export interface PostDTO {
  id: number;
  title: string;
  body: string;
  price: number;
  userId: number;
  preview: string;
  images: string;
  slug: string;
  categoryId: number;
  user: UserDTO;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostDTO {
  title: string;
  body: string;
  price: number;
  userId: number;
  preview: string;
  images: string;
  slug: string;
  categoryId: number;
}

export interface EditPostDTO {
  id: number;
  title: string;
  body: string;
  price: number;
  userId: number;
  preview: string;
  images: string;
  slug: string;
  categoryId: number;
}
