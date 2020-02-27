import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
class UserScreen extends Component {
  state = {
    bool: false,
  };
  render() {
    return (
      <Container>
        <UserCover>
          <Image
            resizeMode={'stretch'}
            source={{
              uri:
                'http://p1.music.126.net/9cGqPQdDhuA0YKrQTkD95g==/109951164718684599.jpg',
            }}
          />
          <Avatar />
          <Title numberOfLines={1}>
            {this.state.bool ? '用户1700293819' : '请先登录'}
          </Title>
        </UserCover>
        <MusicMenu>
          <Cover>
            <Icon name="ios-download" size={26} color={'white'} />
            <LocalMusic>本地音乐</LocalMusic>
          </Cover>
          <Cover>
            <Icon name="ios-musical-notes" size={26} color={'white'} />
            <MyRadio>我的电台</MyRadio>
          </Cover>
          <Cover>
            <Icon name="ios-star" size={26} color={'white'} />
            <MyCollection>我的收藏</MyCollection>
          </Cover>
          <Cover>
            <Icon name="ios-heart" size={26} color={'white'} />
            <FocusNewSong>关注新歌</FocusNewSong>
          </Cover>
        </MusicMenu>
      </Container>
    );
  }
}

export default UserScreen;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;
const UserCover = styled.View`
  flex-direction: row;
  width: 100%;
  height: 150px;
  padding: 60px 20px 0;
`;
const Image = styled.Image`
  display: none;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  margin-right: 10px;
`;
const Avatar = styled.View`
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 30px;
  margin-right: 10px;
`;
const Title = styled.Text`
  width: 180px;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  color: white;
`;
const MusicMenu = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  flex-direction: row;
  justify-content: space-between;
`;
const Cover = styled.View`
  justify-content: center;
  align-items: center;
`;
const LocalMusic = styled.Text`
  font-size: 18px;
  color: white;
`;
const MyRadio = styled.Text`
  font-size: 18px;
  color: white;
`;
const MyCollection = styled.Text`
  font-size: 18px;
  color: white;
`;
const FocusNewSong = styled.Text`
  font-size: 18px;
  color: white;
`;
