import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, YellowBox} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {HotSearchData} from '../componets/Fetch';
import {connect} from 'react-redux';
const mapStateToProps = state => {
  return {
    HotSearchData: state.HotSearchData,
    Search: state.Search,
  };
};
const mapDispatchProps = dispatch => {
  return {
    getHotSearchData: HotSearchData =>
      dispatch({
        type: 'GET_HOTSEARCHDATA',
        HotSearchData,
      }),
    getSearch: Search =>
      dispatch({
        type: 'GET_SEARCH',
        Search,
      }),
  };
};
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      value: '',
    };
  }
  componentDidMount() {
    HotSearchData.then(res => res.json()).then(res => {
      this.props.getHotSearchData(res.data);
    });
  }
  KeyEnter = () => {
    let val = this.state.value;
    fetch(`http://guohaucong.top:8800/search?keywords=${val}`)
      .then(res => res.json())
      .then(res => {
        if (res.result.songCount !== 0) {
          this.props.getSearch(res.result.songs);
        } else {
          alert('找不到该数据');
          this.props.getSearch(this.props.Search);
        }
      });
  };
  render() {
    console.log(this.props.HotSearchData[0]);
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TitleBar>
          <Container>
            <Icon
              name="ios-search"
              color="#ccc"
              size={26}
              style={{position: 'absolute', zIndex: 10, marginLeft: 30}}
            />
            <TextInput
              onSubmitEditing={this.KeyEnter}
              onChangeText={value =>
                this.setState({
                  value,
                })
              }
              placeholder="告白最近很火"
              enablesReturnKeyAutomatically={true}
              keyboardType="default"
              autoCapitalize={'none'}
            />
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Title style={{fontSize: 20, color: 'rgba(0,0,0,0.7)'}}>
                取消
              </Title>
            </TouchableOpacity>

            <AvatarCover>
              <Icon name="ios-person" color="#ccc" size={32} />
            </AvatarCover>
          </Container>
        </TitleBar>
        <ScrollView style={{display: this.state.value ? 'none' : 'flex'}}>
          <SearchBox>
            <HotSearch>
              <HotTitle>热搜榜</HotTitle>
              <HotBox>
                {this.props.HotSearchData.map((item, index) => (
                  <HotCover key={index}>
                    <Index>{index + 1}</Index>
                    <HotSubtitle>
                      <MusicName numberOfLines={1}>{item.searchWord}</MusicName>
                      <Subtitle numberOfLines={1}>{item.content}</Subtitle>
                    </HotSubtitle>
                  </HotCover>
                ))}
              </HotBox>
            </HotSearch>
          </SearchBox>
        </ScrollView>
        <ScrollView style={{display: this.state.value ? 'flex' : 'none'}}>
          {this.props.Search.map((item, index) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.push('Play', {
                  id: item.id,
                  title: item.name,
                  backgroundImg: item.artists[0].img1v1Url,
                })
              }
              key={index}>
              <SearchContainer>
                <Icon name="ios-search" color="#ccc" size={22} />
                <SearchMusic numberOfLines={1}>{item.name}</SearchMusic>
              </SearchContainer>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchProps)(SearchScreen);

const TitleBar = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 50px;
  padding: 0 5px;
  background: white;
  margin-bottom: 20px;
`;
const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
const TextInput = styled.TextInput`
  width: 280px;
  height: 35px;
  margin-left: 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  justify-content: center;
  background: #f6f6f6;
  padding-left: 44px;
`;
const Title = styled.Text`
  margin-left: 15px;
  color: #c5c5c5;
  font-size: 16px;
`;
const AvatarCover = styled.View`
  margin-left: 15px;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
`;
const SearchBox = styled.View`
  margin-top: 20px;
`;
const HotSearch = styled.View`
  width: 100%;
  padding: 0 18px;
`;
const HotTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  height: 30px;
`;
const HotBox = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;
const HotCover = styled.View`
  width: 189px;
  flex-direction: row;
  height: 60px;
  align-items: center;
`;
const Index = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.6);
`;
const HotSubtitle = styled.View`
  height: 100%;
  padding: 10px 0;
`;
const MusicName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
`;
const Subtitle = styled.Text`
  width: 150px;
  font-size: 12px;
  color: #acacac;
  margin-top: 5px;
`;
const SearchContainer = styled.View`
  width: 100%;
  padding: 10px 18px;
  flex-direction: row;
  align-items: center;
`;
const SearchMusic = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  flex-wrap: nowrap;
  color: rgba(0, 0, 0, 0.6);
`;
