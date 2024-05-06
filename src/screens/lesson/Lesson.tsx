import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import SessionCard from '../../components/SessionCard';
import {lessonSessions, sessions} from '../../data/Data';
import {COLORS, ICONS, SIZES} from '../../constant/Constant';
import PosterSession from '../../components/PosterSession';

export default function Lesson() {
  return (
    <View
      style={{
        flex: 1,
        paddingStart: SIZES.paddingSmall,
        paddingEnd: SIZES.paddingSmall,
        backgroundColor: COLORS.screen_background_color,
      }}>
      <ScrollView>
        <PosterSession session={sessions[2]} />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.marginMedium,
            marginBottom: SIZES.marginMedium,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: '#3a1f38', fontSize: 20, fontWeight: '500'}}>
              All Sessions
            </Text>
            <Image
              source={ICONS.DOWN_ARROW}
              style={{
                width: 18,
                height: 18,
                tintColor: '#707070',
                marginStart: SIZES.marginMediumSmall,
              }}
            />
          </View>
          <Image
            source={ICONS.SORT}
            style={{width: 30, height: 30, tintColor: '#d6ccc6'}}
          />
        </View>
        {lessonSessions.map((value, index) => {
          return (
            <SessionCard
              avatar={value.avatar}
              booked={value.booked}
              key={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
