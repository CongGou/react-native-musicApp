import React, {Component} from 'react';
import {ScrollView, Dimensions, Text, YellowBox} from 'react-native';
import styled from 'styled-components';
import PlayListTitle from './ChildComponents/PlayListTitle';
import List from './ChildComponents/List';
import {connect} from 'react-redux';
// 请求数据接口
import {newSongData, OriginalData, HotSongData, SoaringData} from './Fetch';
function mapStateToProps(state) {
  return {
    // 新歌榜
    newSong: state.newSong,
    // 原创榜
    Original: state.Original,
    // 热歌榜
    HotSong: state.HotSong,
    // 飙升榜
    Soaring: state.Soaring,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getnewSong: newSong =>
      dispatch({
        type: 'GET_NEWSONG',
        newSong,
      }),
    getOriginal: Original =>
      dispatch({
        type: 'GET_ORIGINAL',
        Original,
      }),
    getHotSong: HotSong =>
      dispatch({
        type: 'GET_HOTSONG',
        HotSong,
      }),
    getSoaring: Soaring =>
      dispatch({
        type: 'GET_SOARING',
        Soaring,
      }),
  };
}
class SongList extends Component {
  constructor(arg) {
    super(arg);
    console.disableYellowBox = true;
  }
  state = {
    bool: true,
  };
  componentDidMount() {
    //云音乐新歌榜
    newSongData
      .then(res => res.json())
      .then(res => {
        this.props.getnewSong(res.playlist.tracks);
      });
    //网易原创歌曲榜
    OriginalData.then(res => res.json()).then(res => {
      this.props.getOriginal(res.playlist.tracks);
    });
    //云音乐热歌榜
    HotSongData.then(res => res.json()).then(res => {
      this.props.getHotSong(res.playlist.tracks);
    });
    //云音乐飙升榜
    SoaringData.then(res => res.json()).then(res => {
      this.props.getSoaring(res.playlist.tracks);
    });
  }
  render() {
    const arr = [
      {title: '云音乐新歌榜', data: this.props.newSong},
      {title: '网易原创歌曲榜', data: this.props.Original},
      {title: '云音乐热歌榜', data: this.props.HotSong},
      {title: '云音乐飙升榜', data: this.props.Soaring},
    ];
    const navigation = this.props.navigation;
    const name = this.props.name;
    return (
      <SongListView>
        <PlayListTitle
          title={this.props.title}
          subtitle={this.props.subtitle}
          navigation={navigation}
          name={name}
        />
        <ScrollView
          horizontal={true}
          pagingEnabled={true} //启动分页器
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {arr.map((item, index) => (
            <View key={index}>
              <List
                title={item.title}
                data={item.data}
                navigation={navigation}
              />
            </View>
          ))}
        </ScrollView>
      </SongListView>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
const SongListView = styled.View``;
const View = styled.View`
  position: relative;
  width: 414px;
  height: 220px;
  position: relative;
  padding: 0 15px;
`;
