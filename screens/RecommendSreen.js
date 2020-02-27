import React, {Component} from 'react';
import {YellowBox, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import HeaderTop from '../componets/ChildComponents/Header';
import PlayList from '../componets/ChildComponents/PlayList';
import {RecommendedPlaylist} from '../componets/Fetch';
import {connect} from 'react-redux';
function mapStateToProps(state) {
  return {
    RecommendedPlaylist: state.RecommendedPlaylist,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getRecommendedPlaylist: RecommendedPlaylist =>
      dispatch({
        type: 'GET_RECOMMENDEDPLAYLIST',
        RecommendedPlaylist,
      }),
  };
}

class RecommendScreen extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  UNSAFE_componentWillMount() {
    RecommendedPlaylist.then(res => res.json())
      .then(res => {
        this.props.getRecommendedPlaylist(res.result);
      })
      .catch(e => console.log(e));

    // console.log(1);
  }
  _keyExtractor = (item, index) => item.id;
  render() {
    console.log(this.props.navigation);
    return (
      <Contsiner>
        <Top>
          <HeaderTop title={'歌单广场'} navigation={this.props.navigation} />
        </Top>
        <ScrollView style={{zIndex: -10}}>
          <Cover>
            {this.props.RecommendedPlaylist.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.props.navigation.push('RecommendPlayScreen', {
                    id: item.id,
                  })
                }>
                <PlayList
                  image={item.picUrl}
                  Playcount={item.playCount}
                  title={item.name}
                />
              </TouchableOpacity>
            ))}
          </Cover>
        </ScrollView>
      </Contsiner>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendScreen);
const Contsiner = styled.View`
  width: 100%;
  height: 100%;
`;
const Top = styled.View`
  width: 100%;
  height: 90px;
  background: white;
`;
const Cover = styled.View`
  width: 100%;
  padding: 15px 0 15px 10px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
