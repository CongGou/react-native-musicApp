import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import Header from '../componets/ChildComponents/Header';
class PlayListScreen extends Component {
  state = {
    list: [
      {
        tracks: [],
        updateFrequency: '',
        coverImgUrl: '',
        id: '',
      },
    ],
  };
  componentDidMount() {
    fetch('http://guohaucong.top:8800/toplist/detail')
      .then(res => res.json())
      .then(res => {
        this.setState({
          list: res.list.slice(0, 4),
        });
      });
  }
  render() {
    // console.log();
    return (
      <Container>
        <Header title={'排行榜'} navigation={this.props.navigation} />
        <Title>官方榜</Title>
        {this.state.list.map((item, index) => (
          <Cover key={index}>
            <Image source={{uri: item.coverImgUrl}} />
            <Subtitle
              style={{
                position: 'absolute',
                color: 'white',
                fontSize: 14,
                left: 20,
                bottom: 5,
              }}>
              {item.updateFrequency}
            </Subtitle>
            <DetailCover>
              {item.tracks.map((item, index) => (
                <Subtitle numberOfLines={1} key={index}>
                  {index + 1 + '.'} {item.first} -{item.second}
                </Subtitle>
              ))}
            </DetailCover>
          </Cover>
        ))}
      </Container>
    );
  }
}
export default PlayListScreen;
const Container = styled.View`
  flex: 1;
  background: white;
  padding-top: 90px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  padding: 20px 15px;
`;
const Cover = styled.View`
  position: relative;
  flex-direction: row;
  padding: 0 15px;
  margin-bottom: 10px;
`;
const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  background: blue;
`;
const DetailCover = styled.View`
  width: 250px;
  height: 120px;
  overflow: hidden;
  justify-content: center;
  margin-left: 15px;
`;
const Subtitle = styled.Text`
  width: 250px;
  height: 30px;
  flex-wrap: nowrap;
  overflow: hidden;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 2;
`;
