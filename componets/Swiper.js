import React, {Component} from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
let ScreenW = Dimensions.get('window').width;
let ScreenH = Dimensions.get('window').height;
if (ScreenW > 414) {
  ScreenW = ScreenW - 30;
  ScreenH = 300;
} else {
  ScreenW = 380;
  ScreenH = 150;
}
// 轮播图组件
const BananerSwiper = props => {
  // console.log(props.data);
  //data父组件传递的数据
  const data = props.data;
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
          <TouchableOpacity key={index}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
            />
          </TouchableOpacity>
        ))}
      </Swiper>
    </Container>
  );
};
export default BananerSwiper;
const Container = styled.View`
  margin: 20px 15px;
  width: ${ScreenW};
  background: #ccc;
  height: ${ScreenH};
  border-radius: 10px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  /* border-radius: 10px; */
`;
