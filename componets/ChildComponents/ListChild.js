import React, {Component} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

class ListChild extends Component {
  state = {
    bool: true,
  };
  render() {
    return (
      <Cover>
        <Image
          source={{
            uri: this.props.al.picUrl,
          }}
        />

        <TextCover>
          <Ranking>{this.props.list + 1}</Ranking>
          <Subtitle numberOfLines={1}>{this.props.title}</Subtitle>
          {this.props.ar.map((item, index) => (
            <Singer numberOfLines={1} key={index}>
              - {item.name}
            </Singer>
          ))}

          <IconCover style={{display: this.state.bool ? 'flex' : 'none'}}>
            <Icon
              name="ios-radio-button-off"
              color={'rgba(0,0,0,0.5)'}
              size={32}
            />
            <Icon
              ref="icon"
              ref="icon"
              name="ios-play"
              color={'red'}
              size={18}
              style={{
                position: 'absolute',
                right: 17,
                top: 13,
              }}
            />
          </IconCover>
          <IconCover style={{display: this.state.bool ? 'none' : 'flex'}}>
            <Icon
              ref="icon"
              ref="icon"
              name="ios-volume-high"
              color={'red'}
              size={18}
              // style={{
              //     position: 'absolute',
              //     right: -20,
              //     top: 7,
              // }}
            />
          </IconCover>
        </TextCover>
      </Cover>
    );
  }
}

export default ListChild;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Cover = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  padding: 8px 0;
`;
const Image = styled.Image`
  width: 46px;
  height: 46px;
  background: white;
  border-radius: 5px;
  margin-right: 10px;
`;
const TextCover = styled.View`
  position: relative;
  flex-direction: row;
  width: 280px;
  padding: 10px 0;
`;
const Ranking = styled.Text`
  font-weight: 600;
  font-size: 18px;
  margin-right: 15px;
`;
const Subtitle = styled.Text`
  width: 110px;
  font-size: 16px;
  margin: 2px 5px 0 0;
  overflow: hidden;
`;
const Singer = styled.Text`
  width: 50px;
  margin: 2px 5px 0 0;
  color: rgba(0, 0, 0, 0.5);
`;
const IconCover = styled.View`
  width: 45px;
  height: 45px;
  position: absolute;
  right: 0;
  padding: 6px 9px;
`;
