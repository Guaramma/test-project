export interface PostType {
  id?: number;
  title?: string;
  body?: string;
}

export interface RootStateType {
  posts: PostType[];
  post?: PostType;
}
export interface PostPrps {
  post: PostType;
  singlePost?: boolean;
}

export interface StyleProps {
  delete?: boolean;
  edit?: boolean;
}

export interface PostContainerProps {
  singlePost: boolean;
}

export interface LinkStyleProps {
  link?: boolean;
}
