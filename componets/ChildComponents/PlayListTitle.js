import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
const PlayListTitle = props => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <TitleCover>
        <SubTitle>{props.subtitle}</SubTitle>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(props.name);
          }}>
          <ToView>查看更多</ToView>
        </TouchableOpacity>
      </TitleCover>
    </Container>
  );
};

export default PlayListTitle;

const Container = styled.View`
  width: 100%;
  padding: 10px 15px;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
`;
const TitleCover = styled.View`
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 0;
  flex-direction: row;
  justify-content: space-between;
`;
const SubTitle = styled.Text`
  margin-top: 2px;
  font-size: 20px;
  font-weight: 600;
`;
const ToView = styled.Text`
  color: rgba(0, 0, 0, 0.7);
  width: 80px;
  height: 24px;
  line-height: 20px;
  text-align: center;
  border-radius: 13px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;
