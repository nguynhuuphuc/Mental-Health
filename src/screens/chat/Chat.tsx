import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/Constant';

export default function Chat() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Coming Soon
      </Text>
    </View>
  );
}
