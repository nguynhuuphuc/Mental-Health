import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constant/Constant';

export const style = StyleSheet.create({
  icon24: {
    width: 24,
    height: 24,
  },
  cBotTabIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedTabIcon: {
    position: 'absolute',
    top: 0,
    width: 12,
    height: 6,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
  },
  botTabIcon: {
    marginTop: SIZES.marginMedium,
    marginBottom: SIZES.marginSmall,
  },
});
