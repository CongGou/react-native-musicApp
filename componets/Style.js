import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import PlayListTitle from './ChildComponents/PlayListTitle';
import styled from 'styled-components';
import StylePlayChild from './ChildComponents/StylePlayChild';

const Style = props => {
  // console.log(props.navigation);
  const Data = props.data;
  const navigation = props.navigation;
  const name = props.name;
  return (
    <StyleView>
      <PlayListTitle
        title="风格推荐"
        subtitle="一秒让你爱上电音"
        navigation={navigation}
        name={name}
      />
      <Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View>
            {Data.map((item, index) => (
              <StylePlayChild
                key={index}
                index={index}
                title={item.name}
                ar={item.ar}
                al={item.al}
                id={item.id}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      </Container>
    </StyleView>
  );
};
export default Style;

const StyleView = styled.View``;

const Container = styled.View`
  margin-left: 15px;
  width: 100%;
  height: 204px;
`;
const View = styled.View`
  width: 1500px;
  margin-right: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
