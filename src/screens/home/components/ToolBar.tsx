import {View, Text, Image} from 'react-native';
import React from 'react';
import {ICONS, IMAGES} from '../../../constant/Constant';
import {style} from '../Style';

export default function ToolBar() {
  return (
    <View style={style.cToolBar}>
      <Image source={IMAGES.avatar} style={style.avatar} />

      <View style={style.cBadges}>
        <Image source={ICONS.NOTIFICATION} style={[style.icon32]} />
        <View style={style.badgesCircleBackground}>
          <Text style={style.badgesNumber}>3</Text>
        </View>
      </View>
    </View>
  );
}
