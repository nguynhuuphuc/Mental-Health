import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {COLORS, ICONS, SCREENS} from '../../constant/Constant';
import Home from '../home/Home';
import Lesson from '../lesson/Lesson';
import Chat from '../chat/Chat';
import Hub from '../hub/Hub';
import BottomTabIcon from './components/BottomTabIcon';
import Header from '../home/components/Header';
import ToolBar from '../home/components/ToolBar';

const Tab = createBottomTabNavigator();

const customHeader = ({navigation, route, options}: BottomTabHeaderProps) => {
  return (
    <SafeAreaView>
      <ToolBar />
    </SafeAreaView>
  );
};

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: customHeader,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <BottomTabIcon
              focused={focused}
              color={color}
              size={size}
              icons={[ICONS.HOME_FILLED, ICONS.HOME_OUTLINE]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.LESSON}
        component={Lesson}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <BottomTabIcon
              focused={focused}
              color={color}
              size={size * 1.2}
              icons={[ICONS.VIDEO_FILLED, ICONS.VIDEO_OUTLINE]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.CHAT}
        component={Chat}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <BottomTabIcon
              focused={focused}
              color={color}
              size={size}
              icons={[ICONS.MESSAGE_FILLED, ICONS.MESSAGE_OUTLINE]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.HUB}
        component={Hub}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <BottomTabIcon
              focused={focused}
              color={color}
              size={size}
              icons={[ICONS.USERS_FILLED, ICONS.USERS_OUTLINE]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
