import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {style} from './Style';
import CategoryItem from '../../components/CategoryItem';
import {COLORS, ICONS, SIZES} from '../../constant/Constant';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {selected} from './CategoryHubReducer';
import {Dispatch} from '@reduxjs/toolkit';
import PostItem from './components/PostItem';
import {hubPosts} from '../../data/Data';

const onPressCategoryItem = (dispatch: Dispatch, name: string) => {
  dispatch(selected(name));
};

export default function Hub() {
  const categoryHub = useSelector((state: RootState) => state.categoryHub);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={style.hubContainer}
        contentContainerStyle={{paddingBottom: 12}}
        showsVerticalScrollIndicator={false}>
        <Text style={[style.hubTitle]}>Wellness Hub</Text>
        <FlatList
          style={{
            marginTop: SIZES.marginMedium,
            marginBottom: SIZES.marginSmall,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryHub}
          renderItem={({item}) => {
            return (
              <CategoryItem
                name={item.name}
                onPress={(name: string) => onPressCategoryItem(dispatch, name)}
                focused={item.focused}
              />
            );
          }}
        />
        {hubPosts.map((value, index) => {
          return <PostItem post={value} key={index} />;
        })}
      </ScrollView>
      <TouchableOpacity style={[style.floating, style.shadow]}>
        <Image
          source={ICONS.EDIT}
          style={{width: 32, height: 32, tintColor: COLORS.white}}
        />
      </TouchableOpacity>
    </View>
  );
}
