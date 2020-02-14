import React, {Component} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = props => {
  return (
    <TitleBar>
      <Container>
        <Voice>
          <Icon name="ios-mic" color="red" size={30} />
        </Voice>
        <Cover>
          <Icon name="ios-search" color="#ccc" size={20} />
          <Title>告白</Title>
          <Title>最近很火</Title>
        </Cover>
        <AvatarCover>
          <Avatar />
        </AvatarCover>
      </Container>
    </TitleBar>
  );
};
export default Header;

const TitleBar = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 15px;
`;
const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Cover = styled.View`
  width: 280px;
  height: 35px;
  margin-left: 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #e7e7e7;
`;
const Voice = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
`;
const Title = styled.Text`
  margin-left: 5px;
  color: #c5c5c5;
  font-size: 16px;
`;
const AvatarCover = styled.View`
  margin-left: 10px;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 28px;
  height: 28px;
  background: blue;
  border-radius: 14px;
`;
