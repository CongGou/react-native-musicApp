import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreens';
import RecommendScreen from '../screens/RecommendSreen';
import SongListScreen from '../screens/SongListScreen';
import PlayListScreen from '../screens/PlayListScreen';
import Play from '../componets/Play';
import RecommendPlayScreen from '../screens/RecommendPlayScreen';
import SearchScreen from '../screens/SearchScreen';
const activeColor = 'red';
const inactiveColor = '#b8bece';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabNavigator = props => {
  return (
    <Tab.Navigator
      mode={'modal'}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveBackgroundColor: 'rgba(255,255,255,0.1)',
      }}>
      <Tab.Screen
        name="发现"
        component={HomeScreen}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({focused}) => (
            <Icon
              name="ios-home"
              size={30}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="我的"
        component={UserScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({focused}) => (
            <Icon
              name="ios-musical-notes"
              size={30}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Home = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="每日推荐" component={SongListScreen} />
        <Stack.Screen name="歌单" component={RecommendScreen} />
        <Stack.Screen
          name="RecommendPlayScreen"
          component={RecommendPlayScreen}
        />
        <Stack.Screen name="排行榜" component={PlayListScreen} />
        <Stack.Screen name="电台" component={RecommendScreen} />
        <Stack.Screen name="直播" component={RecommendScreen} />
        <Stack.Screen name="Play" component={Play} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Home;
