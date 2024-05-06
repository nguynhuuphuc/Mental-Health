import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../../../constant/Constant';
import {style} from '../Styles';

type Props = {
  color?: string;
  focused?: boolean;
  size?: number;
  icons: any[2];
};

export default function BottomTabIcon({color, focused, size, icons}: Props) {
  return (
    <View style={style.cBotTabIcon}>
      {focused ? <View style={style.focusedTabIcon} /> : null}
      <Image
        source={focused ? icons[0] : icons[1]}
        style={[
          {tintColor: color, width: size, height: size},
          style.botTabIcon,
        ]}
      />
    </View>
  );
}
