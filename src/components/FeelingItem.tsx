import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Style';
import {COLORS, SIZES} from '../constant/Constant';

type Props = {
  name: string;
  icon: any;
  backgroundColor: string;
};

export default function FeelingItem({name, icon, backgroundColor}: Props) {
  return (
    <View style={[style.cFeelingItem]}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: backgroundColor,
            padding: SIZES.paddingSmall,
            borderRadius: 20,
          },
        ]}>
        <Image style={[style.feelingIcon]} source={icon} />
      </TouchableOpacity>
      <Text style={style.feelingName}>{name}</Text>
    </View>
  );
}
