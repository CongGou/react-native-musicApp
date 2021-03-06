import React, {Component} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import PlayListTitle from './ChildComponents/PlayListTitle';
import styled from 'styled-components';
import PlayList from './ChildComponents/PlayList';
const RecommendPlaylist = props => {
  const handleClick = id => {
    // alert(id);
    navigation.push('RecommendPlayScreen', {id});
  };
  const Data = props.data;
  const navigation = props.navigation;
  const name = props.name;
  return (
    <View>
      <PlayListTitle
        title={props.title}
        subtitle={props.subtitle}
        navigation={navigation}
        name={name}
      />
      <Cover>
        <ScrollView horizontal={true} indicatorStyle={'white'}>
          {Data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleClick(item.id)}>
              <PlayList
                image={item.picUrl}
                Playcount={item.playCount}
                title={item.name}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Cover>
    </View>
  );
};
export default RecommendPlaylist;

const View = styled.View`
  width: 100%;
  height: 240px;
`;
const Cover = styled.View`
  padding: 0 15px;
  flex-direction: row;
`;
