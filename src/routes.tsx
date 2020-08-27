import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './styles/colors';

import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: Platform.OS === 'ios' ? 84 : 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 24 : 20,
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="md-heart"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
      />
      <Screen
        name="Discover"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
      />
      <Screen
        name="Browse"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="content-copy"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
      />
      <Screen
        name="Esports"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="trophy-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
