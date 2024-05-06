import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constant/Constant';
import SessionCard from './SessionCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const style = StyleSheet.create({
  cFeelingItem: {
    marginTop: SIZES.marginMedium,
    marginEnd: SIZES.marginMedium,
  },
  feelingIcon: {
    tintColor: COLORS.white,
    width: 40,
    height: 40,
  },
  feelingName: {
    marginTop: SIZES.marginExtraSmall,
    alignSelf: 'center',
    color: COLORS.gray66,
  },
  cSessionCard: {
    flex: 1,
    marginTop: SIZES.marginMedium,
    borderRadius: 24,
    overflow: 'hidden',
  },
  sessionCardIcon: {
    width: 80,
    height: 80,
  },
  sessionCardContent: {
    flex: 1,
  },
  sessionCardTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  sessionCardSubTitle: {
    marginTop: SIZES.marginExtraSmall,
    fontSize: 14,
  },
  cSessionCardAction: {
    marginTop: SIZES.marginMedium,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sessionCardActionTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginEnd: SIZES.marginMediumSmall,
  },
  sessionCardActionIcon: {
    width: 20,
    height: 20,
  },
  cEntryCard: {
    flex: 0.48,
    marginTop: SIZES.marginMedium,
    backgroundColor: COLORS.entry_background_color,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    width: 'auto',
    borderRadius: 12,
  },
  icon20: {
    width: 20,
    height: 20,
  },
  entryCartTitle: {
    marginStart: SIZES.marginSmall,
    color: COLORS.entry_title_color,
    fontSize: 14,
    fontWeight: '500',
  },
  cCategoryItem: {
    padding: SIZES.paddingSmall,
    backgroundColor: '#f3f1f0',
    borderRadius: 12,
    marginEnd: SIZES.marginSmall,
  },
  categoryItemName: {
    fontSize: 14,
  },
  sessionContainer: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    paddingStart: SIZES.paddingSmall,
    paddingEnd: SIZES.paddingSmall,
    paddingTop: SIZES.paddingMedium,
    paddingBottom: SIZES.paddingMedium,
    marginBottom: SIZES.marginMedium,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: COLORS.tuft_bush,
  },
  infoActorSession: {
    flexDirection: 'row',
    borderBottomColor: '#e0d6ce',
    paddingBottom: SIZES.paddingMedium,
    borderBottomWidth: 1,
  },
  nameActorSession: {color: '#5e402e', fontWeight: '700', fontSize: 16},
  addressSession: {color: '#5e402e'},
  cDateTimeSession: {
    flex: 1,
    marginTop: SIZES.marginSmall,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
