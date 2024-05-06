import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES, SIZES} from '../../../constant/Constant';
import {style} from '../Style';
import {Post} from '../../../Type/Types';

type Props = {
  post: Post;
};

export default function PostItem({post}: Props) {
  return (
    <View style={[style.postContainer]}>
      <Image source={post.avatar} style={[style.postAvatar]} />
      <View style={[style.postContentContainer]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[style.postUserName]}>{post.name}</Text>
          <Image source={ICONS.DOT} style={style.dot} />
          <Text style={[style.postCreateTime]}>{post.postTime}</Text>
        </View>
        <Text
          style={{
            color: COLORS.post_content,
            fontSize: 14,
          }}>
          {post.content}
        </Text>
        <View style={style.postInteractContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                source={ICONS.LIKE}
                style={[
                  style.icon18,
                  post.liked
                    ? style.interactSelectColor
                    : style.interactDefaultColor,
                ]}
              />
            </TouchableOpacity>
            <Text
              style={{marginStart: SIZES.marginMediumSmall, color: '#8c8c8c'}}>
              {post.likeNumb}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginStart: SIZES.marginLarge}}>
            <TouchableOpacity>
              <Image
                source={ICONS.MESSAGE_OUTLINE}
                style={[style.icon18, style.interactDefaultColor]}
              />
            </TouchableOpacity>
            <Text
              style={{marginStart: SIZES.marginMediumSmall, color: '#8c8c8c'}}>
              {post.commentNumb > 0 ? post.commentNumb : null}
            </Text>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
            <TouchableOpacity>
              <Image
                source={ICONS.SHARE}
                style={[style.icon18, style.interactDefaultColor]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
