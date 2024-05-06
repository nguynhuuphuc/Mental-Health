export enum SCREENS {
  HOME = 'HOME',
  LESSON = 'LESSON',
  CHAT = 'CHAT',
  HUB = 'HUB',
}

export const ICONS = {
  HOME_FILLED: require('../icons/home_filled.png'),
  HOME_OUTLINE: require('../icons/home.png'),
  VIDEO_OUTLINE: require('../icons/video-camera.png'),
  VIDEO_FILLED: require('../icons/video_filled.png'),
  MESSAGE_OUTLINE: require('../icons/message.png'),
  MESSAGE_FILLED: require('../icons/message_filled.png'),
  USERS_OUTLINE: require('../icons/users.png'),
  USERS_FILLED: require('../icons/users_filled.png'),
  NOTIFICATION: require('../icons/notifications.png'),
  MEETING: require('../icons/meeting.png'),
  LOTUS: require('../icons/lotus.png'),
  CALENDAR: require('../icons/calendar.png'),
  RIGHT_ARROW: require('../icons/right.png'),
  JOURNAL: require('../icons/notebook_filled.png'),
  ARTICLE: require('../icons/news.png'),
  QUOTATION_MARK: require('../icons/quotation-mark.png'),
  DOT: require('../icons/dot.png'),
  LIKE: require('../icons/like.png'),
  SHARE: require('../icons/share.png'),
  EDIT: require('../icons/edit_outline.png'),
  PLay: require('../icons/play.png'),
  DOWN_ARROW: require('../icons/arrow-down-sign-to-navigate.png'),
  SORT: require('../icons/sort.png'),
  CLOCK: require('../icons/clock.png'),
};

export const COLORS = {
  primary: '#fe8235',
  secondary: '#d9d8d8',
  black: '#000000',
  white: '#ffffff',
  tuft_bush: '#f8d2b0',
  gray66: '#a8a8a8',
  entry_background_color: '#f4f3f1',
  entry_title_color: '#5b3d2b',
  entry_icon_color: '#d6ccc6',
  quotation_background_color: '#f8f6f6',
  screen_background_color: '#fbfbfb',
  hub_title_color: '#371b34',
  cate_text_unfocused: '#999898',
  cate_text_focused: '#fbf6f3',
  cate_background_focused: '#fe8235',
  post_user_name: '#583a27',
  post_content: '#694e3d',
  session_booked: '#f8f6f5',
  session_reschedule: '#fef3e7',
};

export const SIZES = {
  marginLarge: 32,
  marginMedium: 24,
  marginSmall: 12,
  marginMediumSmall: 8,
  marginExtraSmall: 4,

  paddingLarge: 32,
  paddingMedium: 24,
  paddingSmall: 12,
  paddingMediumSmall: 8,
  paddingExtraSmall: 4,
};

export const IMAGES = {
  avatar: require('../images/avatar2.jpg'),
  sessionCard_1: require('../images/1.jpg'),
  sessionCard_2: require('../images/2.jpg'),
  user1: require('../images/user1.png'),
  user2: require('../images/user2.png'),
  user3: require('../images/user3.png'),
  user4: require('../images/user4.png'),
  avatar1: require('../images/avatar3.jpg'),
  avatar2: require('../images/avatar4.jpg'),
  avatar3: require('../images/avatar5.jpg'),
  avatar4: require('../images/avatar6.jpg'),
};

export const FEELINGS = [
  {
    name: 'Happy',
    icon: require('../icons/smile.png'),
    backgroundColor: '#ef5da8',
  },
  {
    name: 'Calm',
    icon: require('../icons/balance.png'),
    backgroundColor: '#aeaff7',
  },
  {
    name: 'Angry',
    icon: require('../icons/angry.png'),
    backgroundColor: '#f09e54',
  },
  {
    name: 'Sad',
    icon: require('../icons/sad.png'),
    backgroundColor: '#a0e3e2',
  },
  {
    name: 'Tired',
    icon: require('../icons/tired-emoji.png'),
    backgroundColor: '#c3f2a5',
  },
  {
    name: 'In Love',
    icon: require('../icons/in-love.png'),
    backgroundColor: '#f0a5f2',
  },
];
