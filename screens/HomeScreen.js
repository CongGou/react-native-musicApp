import React, {Component} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  YellowBox,
} from 'react-native';
import styled from 'styled-components';
import Header from '../componets/Header';
import BananerSwiper from '../componets/Swiper';
import Menu from '../componets/Menu';
import RecommendPlaylist from '../componets/RecommendPlaylist';
import Scenario from '../componets/Scenario';
import Style from '../componets/Style';
import SongList from '../componets/SongList';
import {connect} from 'react-redux';

// 请求数据接口
import {
  BannerData,
  Recommended,
  ScenarioData,
  Electronic,
} from '../componets/Fetch';

function DateTime() {
  const date = new Date();
  let day = date.getDate();
  return {day};
}
let dateT = DateTime();
// 写完登录后需要重新请求推荐歌单和歌曲
function mapStateToProps(state) {
  return {
    BananerData: state.BananerData,
    RecommendedData: state.RecommendedData,
    Scenario: state.Scenario,
    Electronic: state.Electronic,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getBananerData: BananerData =>
      dispatch({
        type: 'GET_BANANERDATA',
        BananerData,
      }),
    getRecommendedData: RecommendedData =>
      dispatch({
        type: 'GET_RECOMMENDEDDATA',
        RecommendedData,
      }),
    getScenarioData: Scenario =>
      dispatch({
        type: 'GET_SCENARIODATA',
        Scenario,
      }),

    getElectronicData: Electronic =>
      dispatch({
        type: 'GET_ELECTRONIC',
        Electronic,
      }),
    getScenarioData: Scenario =>
      dispatch({
        type: 'GET_SCENARIODATA',
        Scenario,
      }),
  };
}
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  state = {
    Loading: false,
    RecommendedData: [],
    Electronic: [],
    Scenario: [
      {
        name: '',
        //音乐作者
        ar: [],
        //音乐介绍
        al: {},
      },
    ],
  };
  UNSAFE_componentWillMount() {
    // 获取轮播图bananer数据
    BannerData.then(res => res.json())
      .then(res => {
        // this.setState({
        //   BananerData: ,
        // });
        this.props.getBananerData(res.banners);
      })
      .catch(e => {
        console.log(e);
      });
    // 获取推荐歌单数据;
    Recommended.then(res => res.json())
      .then(res => {
        this.props.getRecommendedData(res.result);
      })
      .catch(e => {
        console.log(e);
      });
    // 获取推荐电音歌单数据
    Electronic.then(res => res.json())
      .then(res => {
        this.props.getElectronicData(res.playlist.tracks);
      })
      .catch(e => {
        console.log(e);
      });
    //获取场景推荐歌单数据
    ScenarioData.then(res => res.json())
      .then(res => {
        this.props.getScenarioData(res.playlists);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // 下拉刷新
  _onRefresh = () => {
    this.setState({Loading: true}, () => {
      setTimeout(() => {
        this.setState({Loading: false});
      }, 2000);
    });
  };
  render() {
    return (
      <RootView>
        {/* 头部组件 */}
        <Header navigation={this.props.navigation} />
        <ScrollView
          // pagingEnabled={true} //启动分页器
          scrollsToTop={true}
          refreshControl={
            <RefreshControl
              refreshing={this.state.Loading}
              onRefresh={this._onRefresh}
            />
          }>
          {/* bananer轮播图组件 */}
          <BananerSwiper data={this.props.BananerData} />
          {/* 目录Menu组件 */}

          <MenuCover>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.navigate(item.title);
                }}>
                <Menu title={item.title} icon={item.icon} day={item.day} />
              </TouchableOpacity>
            ))}
          </MenuCover>
          {/* 推荐歌单 */}
          <RecommendPlaylist
            title="推荐歌单"
            subtitle="为你精挑细选"
            data={this.props.RecommendedData}
            navigation={this.props.navigation}
            name={'歌单'}
            DateTime={dateT}
          />
          {/* 电音推荐音乐 */}
          <Style
            data={this.props.Electronic}
            navigation={this.props.navigation}
            name={'歌单'}
          />
          {/* 场景推荐 */}
          <Scenario
            title="场景推荐"
            subtitle="Coffee/Tea/Music"
            data={this.props.Scenario}
            navigation={this.props.navigation}
            name={'歌单'}
          />
          {/* 排行榜 */}
          <SongList
            title="排行榜"
            subtitle="热歌风向标"
            navigation={this.props.navigation}
            name={'排行榜'}
          />

          <Foot>到底啦~</Foot>
        </ScrollView>
      </RootView>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
const RootView = styled.View`
  flex: 1;
  padding: 50px 0 0;
  background: #fff;
`;
const MenuCover = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 20px;
`;
const Foot = styled.Text`
  width: 100%;
  height: 100px;
  line-height: 80px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;
const data = [
  {
    icon: 'ios-calendar',
    title: '每日推荐',
    day: dateT.day,
  },
  {
    icon: 'ios-musical-notes',
    title: '歌单',
  },
  {
    icon: 'ios-podium',
    title: '排行榜',
  },
  {
    icon: 'ios-headset',
    title: '电台',
  },
  {
    icon: 'ios-videocam',
    title: '直播',
  },
];
