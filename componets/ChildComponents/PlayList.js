import React, {Componet} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
const PlayList = props => {
  const Playcount = Math.floor(props.Playcount);
  const Million = 10000;
  const TenMillion = 100000000;
  // 播放量
  const Count = () => {
    if (Playcount > Million) {
      if (Playcount > TenMillion) {
        return Math.floor(Playcount / TenMillion) + '亿';
      } else {
        return Math.floor(Playcount / Million) + '万';
      }
    } else {
      return Playcount;
    }
  };
  return (
    <Container>
      <Image
        source={{
          uri: props.image,
        }}
      />
      <Cover>
        <Icon name="ios-play" color={'white'} size={18} />
        <PlayCount>{Count()}</PlayCount>
      </Cover>
      <Title numberOfLines={2}>{props.title}</Title>
    </Container>
  );
};

export default PlayList;

const Container = styled.View`
  position: relative;
  width: 112px;
  margin-right: 10px;
`;
const Cover = styled.View`
  position: absolute;
  top: 5px;
  right: 5px;
  flex-direction: row;
`;
const PlayCount = styled.Text`
  color: #fff;
`;
const Image = styled.Image`
  width: 112px;
  height: 112px;
  border-radius: 5px;
`;
const Title = styled.Text`
  width: 110px;
  height: 35px;
  margin-top: 3px;
  font-size: 14px;
  letter-spacing: 1px;
  flex-wrap: wrap;
  overflow: hidden;
`;
