import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Style';
import {COLORS} from '../constant/Constant';

type Props = {
  focused?: boolean;
  name?: string;
  onPress?: Function | undefined;
};

export default function CategoryItem({focused, name, onPress}: Props) {
  return (
    <TouchableOpacity
      style={[
        style.cCategoryItem,
        focused ? {backgroundColor: COLORS.cate_background_focused} : null,
      ]}
      onPress={() => (onPress != undefined ? onPress(name) : null)}>
      <Text
        style={[
          style.categoryItemName,
          focused
            ? {color: COLORS.cate_text_focused}
            : {color: COLORS.cate_text_unfocused},
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
