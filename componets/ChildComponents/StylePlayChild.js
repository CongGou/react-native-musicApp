import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
class StylePlayChild extends Component {
  state = {
    bool: true,
  };
  handlePlay = index => {
    if (this.state.bool === false) {
      this.props.navigation.push('Play', {
        id: this.props.id,
        title: this.props.title,
        backgroundImg: this.props.al.picUrl,
      });
    } else {
      this.setState({
        bool: false,
      });
    }
  };
  render() {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => {
          this.handlePlay(this.props.index);
        }}>
        <PlayCover>
          <Cover>
            <Image
              source={{
                uri: this.props.al.picUrl,
              }}
            />
            <Content>
              <TitleCover>
                <Title numberOfLines={1}>{this.props.title}</Title>
                {this.props.ar.map((item, index) => (
                  <Name key={index} numberOfLines={1}>
                    - {item.name}
                  </Name>
                ))}
              </TitleCover>
              {/* 写完登录再过来修改 */}
              {/* <Introduce>打发时间东方红郡</Introduce> */}
            </Content>
          </Cover>
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
                right: 7,
                top: 7,
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
              style={{
                position: 'absolute',
                right: -20,
                top: 7,
              }}
            />
          </IconCover>
        </PlayCover>
      </TouchableOpacity>
    );
  }
}
export default StylePlayChild;
const PlayCover = styled.View`
  width: 370px;
  flex-direction: row;
  margin-bottom: 10px;
`;
const Cover = styled.View`
  flex-direction: row;
`;
const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
const Content = styled.View`
  width: 220px;
  margin: 10px 30px 0 10px;
  overflow: hidden;
`;
const TitleCover = styled.View`
  flex-direction: row;
  margin-bottom: 6px;
  overflow: hidden;
`;
const Title = styled.Text`
  width: 120px;
  font-size: 16px;
  font-weight: 600;
`;
const Name = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  width: 50px;
`;
const Introduce = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;
const IconCover = styled.View`
  position: relative;
  margin: 10px 0 0;
`;
