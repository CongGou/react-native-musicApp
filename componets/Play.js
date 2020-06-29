import React, {Component} from 'react';
import styled from 'styled-components';
import {
  TouchableOpacity,
  YellowBox,
  ScrollView,
  Dimensions,
  Animated,
  Slider,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';
import Video from 'react-native-video';
import {connect} from 'react-redux';

const ScreenH = Dimensions.get('window').height;
const ScreenW = Dimensions.get('window').width;
const PlayScreenH = (Dimensions.get('window').height - 300) / 2 - 60;
const PlayScreenW = (Dimensions.get('window').width - 300) / 2;

const mapStateToProps = state => {
  return {
    LyricData: state.LyricData,
  };
};
const mapDispatchProps = dispatch => {
  return {
    getLyricData: LyricData =>
      dispatch({
        type: 'GET_LYRICDATA',
        LyricData,
      }),
  };
};
class Play extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      viewRef: null,
      Switch: true,
      isPlay: false,
      url: '',
      duration: 0.0,
      playTime: 0.0,
      repeat: false,
    };
  }
  // { tabBarVisible: false }
  componentDidMount() {
    const id = this.props.route.params.id;
    // 获取歌词
    fetch(`http://localhost:4000/lyric?id=${id}`)
      .then(res => res.json())
      .then(res => {
        this.props.getLyricData(res.lrc.lyric);
      });
    //获取音乐url
    fetch(`http://localhost:4000/song/url?id=${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          url: res.data[0].url,
        });
        // console.log(res.data[0].url);
        // this.props.getMusicUrl();
      });
  }
  handleSwitch = () => {
    this.setState({
      Switch: !this.state.Switch,
    });
  };
  handlePlay = () => {
    this.setState({
      isPlay: !this.state.isPlay,
    });
  };
  onBuffer = e => {
    console.log(1);
  };

  videoError = () => {
    alert('加载失败');
  };
  // 总时长
  setDuration = data => {
    let duration = data.duration;

    this.setState({
      duration,
    });
  };
  // 播放时间
  setPlayTime = data => {
    let currentTime = parseInt(data.currentTime);
    this.setState({
      playTime: currentTime,
    });
  };
  // 格式化时间
  formatMediaTime = duration => {
    let min = Math.floor(duration / 60);
    let second = Math.floor(duration - min * 60);
    min = min >= 10 ? min : '0' + min;
    second = second >= 10 ? second : '0' + second;
    return min + ':' + second;
  };
  onEnd = () => {
    // console.log(1);
    this.setState({
      isPlay: !this.state.isPlay,
      playTime: 0.0,
    });
  };
  render() {
    const {title, backgroundImg} = this.props.route.params;
    const lyric = this.props.LyricData.split('[');
    let LicData = lyric.map((item, index) => {
      let LicText = item.split(']');
      return LicText[1] ? LicText[1] : item;
    });
    return (
      <PlayView>
        <Backgroud resizeMode={'stretch'} source={{uri: backgroundImg}} />
        <BlurView
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={90}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
        <Header>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back" color={'white'} size={34} />
          </TouchableOpacity>
          <Title>{title}</Title>
          <Avatar />
        </Header>
        <DiscBox style={{display: this.state.Switch ? 'flex' : 'none'}}>
          <TouchableOpacity
            onPress={this.handleSwitch}
            style={{
              width: ScreenW,
              height: ScreenH,
              paddingTop: PlayScreenH,
              paddingLeft: PlayScreenW,
            }}>
            <Cover style={{transform: [{rotateZ: '360deg'}]}}>
              <Disc source={require('../componets/image/coverall.png')} />
              <Image resizeMode={'cover'} source={{uri: backgroundImg}} />
            </Cover>
          </TouchableOpacity>
        </DiscBox>
        <LicCover style={{display: this.state.Switch ? 'none' : 'flex'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: ScreenW,
            }}>
            <TouchableOpacity
              onPress={this.handleSwitch}
              style={{
                alignItems: 'center',
              }}>
              {LicData.map((item, index) => (
                <Lic>{item}</Lic>
              ))}
            </TouchableOpacity>
          </ScrollView>
        </LicCover>

        <BottonCover>
          <ProgressBar>
            <PlayingTime>
              {this.formatMediaTime(this.state.playTime)}
            </PlayingTime>
            {/* 进度条 */}
            <Slider
              onValueChange={value => this.setState({playTime: value})}
              maximumValue={this.state.duration}
              value={this.state.playTime}
              minimumTrackTintColor={'rgba(255,255,255,0.6)'}
              style={{width: 280, height: 20}}
            />
            <TotalLength>
              {this.formatMediaTime(this.state.duration)}
            </TotalLength>
          </ProgressBar>
          <PlayBottonCover>
            <TouchableOpacity>
              <Prev source={require('../componets/image/previous.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handlePlay}>
              <PlayBotton>
                <Icon
                  name="ios-pause"
                  color={'white'}
                  size={36}
                  style={{
                    display: this.state.isPlay ? 'flex' : 'none',
                    marginLeft: 3,
                  }}
                />
                <Icon
                  name="ios-play"
                  color={'white'}
                  size={36}
                  style={{
                    display: this.state.isPlay ? 'none' : 'flex',
                    marginLeft: 5,
                  }}
                />
              </PlayBotton>
            </TouchableOpacity>
            <TouchableOpacity>
              <Next source={require('../componets/image/next.png')} />
            </TouchableOpacity>
          </PlayBottonCover>
        </BottonCover>
        {/* 音乐播放 */}
        <Video
          source={{
            uri: this.state.url,
          }}
          rate={this.state.isPlay ? 1 : 0}
          repeat={true}
          playInBackground={true}
          paused={false}
          playInBackground={true}
          playWhenInactive={true}
          onProgress={data => this.setPlayTime(data)} //当前播放时间
          onLoad={data => this.setDuration(data)} //总时长
          ref={video => (this.player = video)}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          onEnd={this.onEnd}
        />
      </PlayView>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Play);
const PlayView = styled.View`
  position: relative;
  flex: 1;
`;
const Backgroud = styled.Image`
  flex: 1;
`;
const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 40px 15px 0;
  width: 100%;
  height: 90px;
  flex-direction: row;
  position: absolute;
  z-index: 1000;
`;
const Title = styled.Text`
  font-size: 20px;
  color: white;
`;
const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const DiscBox = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Cover = styled.View`
  width: 299px;
  height: 299px;
  border-radius: 150px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  align-items: center;
  justify-content: center;
`;
const Disc = styled.Image`
  width: 280px;
  height: 280px;
  border-radius: 140px;
`;
const Image = styled.Image`
  width: 190px;
  height: 190px;
  position: absolute;
  border-radius: 95px;
`;

const LicCover = styled.View`
  width: 100%;
  height: 600px;
  position: absolute;
  top: 100px;
  justify-content: center;
  align-items: center;
`;
const Lic = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
`;
const BottonCover = styled.View`
  width: 100%;
  height: 105px;
  padding: 0 15px;
  position: absolute;
  bottom: 60px;
`;
const ProgressBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const PlayingTime = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
const TotalLength = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
const PlayBottonCover = styled.View`
  width: 100%;
  height: 95px;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const PlayBotton = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
const Prev = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
`;
const Next = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
`;
