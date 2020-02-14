import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import Header from '../componets/Header';
import BananerSwiper from '../componets/Swiper';
import Menu from '../componets/Menu';
class HomeScreen extends Component {
  render() {
    return (
      <RootView>
        <Header />
        <ScrollView>
          <BananerSwiper />
          <MenuCover>
            {data.map((item, index) => (
              <Menu key={index} title={item.title} icon={item.icon} />
            ))}
          </MenuCover>
        </ScrollView>
      </RootView>
    );
  }
}
export default HomeScreen;
const RootView = styled.View`
  flex: 1;
  padding: 50px 0 0;
`;
const MenuCover = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 20px;
`;
const data = [
  {
    icon: 'ios-calendar',
    title: '每日推荐',
  },
  {
    icon: 'ios-musical-notes',
    title: '歌单',
  },
  {
    icon: 'ios-podium',
    title: '排行榜',
  },
  {
    icon: 'ios-headset',
    title: '电台',
  },
  {
    icon: 'ios-videocam',
    title: '直播',
  },
];
