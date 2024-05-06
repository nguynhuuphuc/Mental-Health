import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constant/Constant';

export const style = StyleSheet.create({
  hubContainer: {
    flex: 1,
    backgroundColor: COLORS.screen_background_color,
    paddingStart: SIZES.paddingMedium,
  },
  hubTitle: {
    color: COLORS.hub_title_color,
    fontSize: 18,
    fontWeight: '500',
  },
  postContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    paddingBottom: SIZES.paddingMedium,
    marginEnd: SIZES.marginMedium,
    marginTop: SIZES.marginMedium,
  },
  postContentContainer: {
    flex: 1,
    marginStart: SIZES.marginSmall,
  },
  postAvatar: {
    width: 40,
    height: 40,
  },
  postUserName: {
    color: COLORS.post_user_name,
    fontSize: 16,
    fontWeight: '500',
  },
  postCreateTime: {
    color: '#9a9a9a',
  },
  dot: {
    width: 16,
    height: 16,
    tintColor: '#9a9a9a',
    alignSelf: 'center',
    marginStart: SIZES.marginExtraSmall,
    marginEnd: SIZES.marginExtraSmall,
  },
  postInteractContainer: {
    flex: 1,
    marginTop: SIZES.marginMedium,
    flexDirection: 'row',
  },
  icon18: {
    width: 18,
    height: 18,
  },
  interactDefaultColor: {
    tintColor: '#dcd4cf',
  },
  interactSelectColor: {
    tintColor: COLORS.primary,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  floating: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
