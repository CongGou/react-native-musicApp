import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
const Menu = props => {
  return (
    <Container>
      <Cover>
        <IconBox>
          <Icon name={props.icon} size={30} color={'white'} />
        </IconBox>
        <Title>{props.title}</Title>
      </Cover>
    </Container>
  );
};
export default Menu;

const Container = styled.View`
  height: 100%;
`;
const Cover = styled.View`
  height: 75px;
`;
const IconBox = styled.View`
  width: 46px;
  height: 46px;
  background: red;
  border-radius: 23px;
  padding: 5px 0 0 10px;
`;
const Title = styled.Text`
  margin-top: 5px;
  text-align: center;
  color: #666261;
`;
