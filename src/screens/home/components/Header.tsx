import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {COLORS, FEELINGS, SIZES} from '../../../constant/Constant';
import FeelingItem from '../../../components/FeelingItem';

export default function Header() {
  return (
    <View>
      <Text style={{fontSize: 32, color: '#3c2139'}}>Good Afternoon,</Text>
      <Text style={{color: '#371b34', fontSize: 32, fontWeight: '700'}}>
        Sarina!
      </Text>
      <Text
        style={{color: '#4a3047', marginTop: SIZES.marginMedium, fontSize: 16}}>
        How are you feeling today ?
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={FEELINGS}
        renderItem={({item}) => (
          <FeelingItem
            name={item.name}
            backgroundColor={item.backgroundColor}
            icon={item.icon}
          />
        )}
      />
    </View>
  );
}
