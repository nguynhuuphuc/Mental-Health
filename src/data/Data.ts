import {Image} from 'react-native';
import {CategoryHub, Post, Session} from '../Type/Types';
import {ICONS, IMAGES} from '../constant/Constant';

export const sessions: Session[] = [
  {
    title: '1 on 1 Sessions',
    titleColor: '#593b28',
    subTitle: `Let's open up to the things that matter the most`,
    subTitleColor: '#6d5241',
    actionName: 'Book Now',
    actionColor: '#fe8438',
    actionIcon: ICONS.CALENDAR,
    sessionIcon: ICONS.MEETING,
    sessionIconColor: '#f09e54',
    backgroundImage: IMAGES.sessionCard_1,
  },
  {
    title: 'Plan Expired',
    titleColor: 'white',
    subTitle: `Get back chat access and session credits`,
    subTitleColor: '#dfede3',
    actionName: 'Buy More',
    actionColor: '#f9fcfa',
    actionIcon: ICONS.RIGHT_ARROW,
    sessionIcon: ICONS.LOTUS,
    sessionIconColor: '#99d9af',
    backgroundImage: IMAGES.sessionCard_2,
  },
  {
    title: 'Upcoming Session',
    titleColor: '#593b28',
    subTitle: `Sahana V.Msc in Clinical Psychology`,
    subTitleColor: '#6d5241',
    actionName: 'Join Now',
    actionColor: '#fe8438',
    actionIcon: ICONS.PLay,
    sessionIcon: undefined,
    sessionIconColor: '#f09e54',
    backgroundImage: IMAGES.sessionCard_1,
    time: ' 7:30 PM - 8:30 PM',
  },
];

export const categoryHub: CategoryHub[] = [
  {
    name: 'Trending',
    focused: true,
  },
  {
    name: 'Relationship',
    focused: false,
  },
  {
    name: 'Self Care',
    focused: false,
  },
  {
    name: 'Trending 2',
    focused: false,
  },
  {
    name: 'Relationship 2',
    focused: false,
  },
  {
    name: 'Self Care 2',
    focused: false,
  },
];

export const hubPosts: Post[] = [
  {
    avatar: IMAGES.user1,
    name: 'Coal Dingo',
    postTime: 'just now',
    content: `Is there a therapy which can cure crossdressing & bdsm compulsion?`,
    liked: true,
    likeNumb: 2,
    commentNumb: 0,
  },
  {
    avatar: IMAGES.user2,
    name: 'Pigeon Car',
    postTime: '3 hrs ago',
    content: `Is there a therapy which can cure crossdressing & bdsm compulsion?`,
    liked: false,
    likeNumb: 12,
    commentNumb: 2,
  },
  {
    avatar: IMAGES.user3,
    name: 'Coal Dingo',
    postTime: '1 hr ago',
    content: `Is there a therapy which can cure crossdressing & bdsm compulsion?`,
    liked: false,
    likeNumb: 12,
    commentNumb: 2,
  },
  {
    avatar: IMAGES.user4,
    name: 'Coal Dingo',
    postTime: '2 mins ago',
    content: `Is there a therapy which can cure crossdressing & bdsm compulsion?`,
    liked: false,
    likeNumb: 12,
    commentNumb: 2,
  },
  {
    avatar: IMAGES.user1,
    name: 'Coal Dingo',
    postTime: '3 hrs ago',
    content: `Is there a therapy which can cure crossdressing & bdsm compulsion?`,
    liked: false,
    likeNumb: 12,
    commentNumb: 2,
  },
  {
    avatar: IMAGES.user1,
    name: 'Coal Dingo',
    postTime: '3 hrs ago  ',
    content: `Is there a therapy which can cure crossdressing & bdsm compulsion?`,
    liked: false,
    likeNumb: 12,
    commentNumb: 2,
  },
];

export const lessonSessions = [
  {
    avatar: IMAGES.avatar1,
    booked: false,
  },
  {
    avatar: IMAGES.avatar2,
    booked: true,
  },
  {
    avatar: IMAGES.avatar3,
    booked: true,
  },
  {
    avatar: IMAGES.avatar4,
    booked: true,
  },
];
