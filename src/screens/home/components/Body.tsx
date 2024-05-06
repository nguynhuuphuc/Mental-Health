import {View, Text, Image} from 'react-native';
import React from 'react';
import SessionCard from '../../../components/SessionCard';
import {sessions} from '../../../data/Data';
import EntryCard from '../../../components/EntryCard';
import {ICONS, SIZES} from '../../../constant/Constant';
import {style} from '../Style';
import PosterSession from '../../../components/PosterSession';

export default function Body() {
  return (
    <View style={{paddingEnd: SIZES.paddingMedium}}>
      <PosterSession session={sessions[0]} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <EntryCard icon={ICONS.JOURNAL} title="Journal" />
        <EntryCard icon={ICONS.ARTICLE} title="Library" />
      </View>
      <View style={[style.cQuotation]}>
        <Text style={{flex: 1}}>
          "It is better to conquer yourself than to win a thousand battles."
        </Text>
        <Image
          source={ICONS.QUOTATION_MARK}
          style={{width: 30, height: 30, tintColor: '#d9d8d8'}}
        />
      </View>
      <PosterSession session={sessions[1]} />
    </View>
  );
}
