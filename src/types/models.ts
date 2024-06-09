export interface IUser {
  id: number;
  username: string;
  image: string;
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
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
  user: IUser;
  createdAt: string;
}
