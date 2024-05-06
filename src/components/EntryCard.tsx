import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Style';
import {COLORS, ICONS} from '../constant/Constant';

type Props = {
  icon: any;
  title: string;
};

export default function EntryCard({icon, title}: Props) {
  return (
    <TouchableOpacity style={[style.cEntryCard]}>
      <Image
        source={icon}
        style={[[style.icon20], {tintColor: COLORS.entry_icon_color}]}
      />
      <Text style={[style.entryCartTitle]}>{title}</Text>
    </TouchableOpacity>
  );
}
