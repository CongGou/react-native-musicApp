import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
const BananerSwiper = props => {
  return (
    <Container>
      <Swiper
        autoplay={true}
        paginationStyle={{bottom: 10}}
        autoplayTimeout={2}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(255,255, 255, 0.6)',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: 'red',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
          />
        }>
        {data.map((item, index) => (
          <Image
            source={{
              uri:
                'http://p1.music.126.net/Dvy0xjQ2ERveH9BlaKVfCA==/109951164705134977.jpg',
            }}
          />
        ))}
      </Swiper>
    </Container>
  );
};
export default BananerSwiper;
const data = [1, 2, 3, 4, 5, 6, 7, 8];
const Container = styled.View`
  margin: 20px 15px;
  width: 380px;
  background: #ccc;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
