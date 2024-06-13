export interface IUser {
  id: number;
  name?: string;
  username: string;
  image: string;
  bio?: string;
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
}

export interface IComment {
  id: number;
  comment: string;
  user: IUser;
}

export interface IPost {
  id: number;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  nofComments?: number;
  nofLikes?: number;
  comments?: IComment[];
  user: IUser;
  createdAt: string;
}
