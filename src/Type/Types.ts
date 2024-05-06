export type Session = {
  title: string;
  titleColor: string;
  subTitle: string;
  subTitleColor: string;
  actionName: string;
  actionIcon: any;
  actionColor: string;
  sessionIcon: any;
  sessionIconColor: string;
  backgroundImage: any;
  time?: string;
};

export type CategoryHub = {
  name: string;
  focused: boolean;
};

export type Post = {
  avatar: any;
  name: string;
  postTime: string;
  content: string;
  liked: boolean;
  likeNumb: number;
  commentNumb: number;
};
