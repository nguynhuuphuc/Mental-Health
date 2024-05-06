import {StyleSheet} from 'react-native';
import {COLORS, ICONS, SIZES} from '../../constant/Constant';

export const style = StyleSheet.create({
  cHome: {
    flex: 1,
    backgroundColor: COLORS.screen_background_color,
    paddingStart: SIZES.paddingMedium,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: COLORS.tuft_bush,
  },
  icon32: {
    width: 30,
    height: 30,
  },
  cToolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingTop: SIZES.paddingSmall,
    paddingStart: SIZES.paddingMedium,
    paddingEnd: SIZES.paddingMedium,
    paddingBottom: SIZES.paddingSmall,
  },
  cBadges: {},
  badgesNumber: {
    color: COLORS.white,
  },
  badgesCircleBackground: {
    position: 'absolute',
    top: -10,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    height: 24,
    width: 24,
  },
  cQuotation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.marginMedium,
    padding: SIZES.paddingSmall,
    paddingTop: SIZES.paddingMedium,
    paddingBottom: SIZES.paddingMedium,
    backgroundColor: COLORS.quotation_background_color,
    borderRadius: 12,
  },
});
