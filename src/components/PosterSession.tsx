import {
  View,
  Text,
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {style} from './Style';
import {ICONS, IMAGES, SIZES} from '../constant/Constant';
import {Session} from '../Type/Types';

type Props = {
  session: Session;
};

export default function PosterSession({session}: Props) {
  return (
    <View style={style.cSessionCard}>
      <ImageBackground source={session.backgroundImage} style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: SIZES.paddingMedium,
          }}>
          <View style={style.sessionCardContent}>
            <Text style={[style.sessionCardTitle, {color: session.titleColor}]}>
              {session.title}
            </Text>
            <Text
              style={[
                style.sessionCardSubTitle,
                {color: session.subTitleColor},
              ]}>
              {session.subTitle}
            </Text>
            {session.time != undefined ? (
              <Text
                style={{
                  marginTop: SIZES.marginSmall,
                  fontSize: 14,
                  color: '#7a604f',
                  fontWeight: '700',
                }}>
                {session.time}
              </Text>
            ) : null}
            <View style={[style.cSessionCardAction, ,]}>
              <TouchableOpacity
                style={[{flexDirection: 'row', alignItems: 'center'}]}>
                <Text
                  style={[
                    style.sessionCardActionTitle,
                    {color: session.actionColor},
                  ]}>
                  {session.actionName}
                </Text>
                <Image
                  style={[
                    style.sessionCardActionIcon,
                    {tintColor: session.actionColor},
                  ]}
                  source={session.actionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          {session.sessionIcon != undefined ? (
            <Image
              style={[
                style.sessionCardIcon,
                {tintColor: session.sessionIconColor},
              ]}
              source={session.sessionIcon}
            />
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
}
