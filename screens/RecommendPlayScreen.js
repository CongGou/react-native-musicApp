import React, {Component} from 'react';
import {ScrollView, Text, YellowBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import SongListTopChild from '../componets/ChildComponents/SongListTopChild';
import HeaderTop from '../componets/ChildComponents/Header';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

const mapStateToProps = state => {
  return {
    RecommendedScreenData: state.RecommendedScreenData,
    CoverImgUrl: state.CoverImgUrl,
  };
};
const mapDispatchProps = dispatch => {
  return {
    getRecommendedScreenData: RecommendedScreenData =>
      dispatch({
        type: 'GET_RECOMMENDEDPLAYSCREENDATA',
        RecommendedScreenData,
      }),
    getCoverImgUrl: CoverImgUrl =>
      dispatch({
        type: 'GET_COVERIMGURL',
        CoverImgUrl,
      }),
  };
};
class RecommendPlayScreen extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  componentDidMount() {
    const id = this.props.route.params.id;
    fetch(`http://guohaucong.top:8800/playlist/detail?id=${id}`)
      .then(res => res.json())
      .then(res => {
        // console.log(res.playlist.coverImgUrl);
        this.props.getCoverImgUrl(res.playlist.coverImgUrl);
        this.props.getRecommendedScreenData(res.playlist.tracks);
      });
  }
  render() {
    const {RecommendedScreenData, CoverImgUrl} = this.props;
    return (
      <Contsiner>
        <Cover>
          <HeaderTop
            navigation={this.props.navigation}
            title={'官方动态歌单'}
          />
          <Image
            resizeMode={'stretch'}
            source={{
              uri: CoverImgUrl,
            }}
          />
          <TopDate>
            <DateCover>
              <Left>19</Left>
              <Right>/ 02</Right>
            </DateCover>
            <Subtitle>
              <Text style={{color: 'black', letterSpacing: 2, fontSize: 15}}>
                历史日推
              </Text>
            </Subtitle>
          </TopDate>

          <AllPlay>
            <Icon name="ios-play" color={'black'} size={28} />
            <PlayText>播放全部</PlayText>
          </AllPlay>
          <MusicCover>
            <ScrollView>
              {RecommendedScreenData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    this.props.navigation.push('Play', {
                      id: item.id,
                      backgroundImg: item.al.picUrl,
                      title: item.name,
                    })
                  }>
                  <SongListTopChild data={item} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </MusicCover>
        </Cover>
      </Contsiner>
    );
  }
  _keyExtractor = (item, index) => item.id;
}
export default connect(mapStateToProps, mapDispatchProps)(RecommendPlayScreen);

const Contsiner = styled.View`
  width: 100%;
  height: 100%;
  background: black;
`;
const Cover = styled.View`
  width: 100%;
  height: 90px;
`;
const Image = styled.Image`
  width: 414px;
  height: 240px;
  z-index: -1;
`;
const TopDate = styled.View`
  width: 100%;
  height: 190px;
  position: absolute;
  top: 90;
`;
const DateCover = styled.View`
  flex-direction: row;
  width: 100%;
  height: 90px;
  padding: 10px 0;
  align-items: flex-end;
`;
const Left = styled.Text`
  font-size: 50px;
  color: white;
  padding: 10px 15px;
`;
const Right = styled.Text`
  font-size: 26px;
  margin-bottom: 8px;
  color: white;
`;
const Subtitle = styled.View`
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin: 0 0 15px 15px;
`;
const AllPlay = styled.View`
  flex-direction: row;
  width: 100%;
  height: 70px;
  padding: 0 15px;
  background: white;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const PlayText = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;
const MusicCover = styled.View`
  width: 100%;
  height: 502px;
  background: white;
`;
