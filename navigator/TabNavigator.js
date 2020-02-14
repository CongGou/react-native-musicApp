import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreens';
import VideoScreen from '../screens/VideoScreen';
const activeColor = 'red';
const inactiveColor = '#b8bece';
const Tab = createBottomTabNavigator();
class TabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveBackgroundColor: 'rgba(255,255,255,0.6)',
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
          <Tab.Screen
            name="视频"
            component={VideoScreen}
            options={{
              tabBarLabel: '视频',
              tabBarIcon: ({focused}) => (
                <Icon
                  name="ios-play-circle"
                  size={30}
                  color={focused ? activeColor : inactiveColor}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default TabNavigator;
