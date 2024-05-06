import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Style';
import {COLORS, ICONS, IMAGES, SIZES} from '../constant/Constant';

type Props = {
  booked: boolean;
  avatar: any;
};

export default function SessionCard({booked, avatar}: Props) {
  const actions = [
    {
      left: 'Reschedule',
      right: 'Join Now',
    },
    {
      left: 'Re-booked',
      right: 'View Profile',
    },
  ];

  const action = booked ? actions[1] : actions[0];
  return (
    <View
      style={[
        style.sessionContainer,
        {
          backgroundColor: booked
            ? COLORS.session_booked
            : COLORS.session_reschedule,
        },
      ]}>
      <View style={[style.infoActorSession]}>
        <Image source={avatar} style={style.avatar} />
        <View style={{marginStart: SIZES.marginSmall}}>
          <Text style={[style.nameActorSession]}>Sahana V</Text>
          <Text style={[style.addressSession]}>Msc in Clinical Psychology</Text>
        </View>
      </View>
      <View style={style.cDateTimeSession}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <Image
            source={ICONS.CALENDAR}
            style={[style.icon20, {tintColor: '#ddd3cc'}]}
          />
          <Text style={{marginStart: SIZES.marginMediumSmall, fontSize: 14}}>
            31st March 22
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <Image
            source={ICONS.CLOCK}
            style={[style.icon20, {tintColor: '#ddd3cc'}]}
          />
          <Text style={{marginStart: SIZES.marginMediumSmall, fontSize: 14}}>
            7:30 PM - 8:30 PM
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: SIZES.marginMedium,
        }}>
        <TouchableOpacity
          style={{
            flex: 0.45,
            backgroundColor: COLORS.primary,
            padding: SIZES.paddingSmall,
            borderRadius: 16,
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.white, fontSize: 16, fontWeight: '700'}}>
            {action.left}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.45,
            padding: SIZES.paddingSmall,
            alignItems: 'center',
          }}>
          <Text
            style={{color: COLORS.primary, fontSize: 16, fontWeight: '700'}}>
            {action.right}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
