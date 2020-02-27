import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const HeaderTop = props => {
  return (
    <Header>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon name="ios-arrow-back" color={'white'} size={34} />
      </TouchableOpacity>
      <Title>{props.title}</Title>
      <Avatar />
    </Header>
  );
};

export default HeaderTop;

const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 40px 15px 0;
  width: 100%;
  height: 90px;
  flex-direction: row;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
`;
const Title = styled.Text`
  font-size: 20px;
  color: white;
`;
const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
