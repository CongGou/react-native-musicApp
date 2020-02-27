const API = 'http://guohaucong.top:8800';
//获取轮播图bananer数据
export const BannerData = fetch(API + '/banner');
//获取推荐歌单数据
export const Recommended = fetch(API + '/personalized?limit=6');
//获取推荐电音歌单数据
export const Electronic = fetch(API + '/playlist/detail?id=2888212971');

//获取场景推荐歌单数据
export const ScenarioData = fetch(
  API + '/top/playlist?cat=%E7%94%B5%E5%AD%90&limit=6',
);
//获取歌单详情数据
// export const ScenarioData = fetch(
//   API + '/playlist/detail?id=',
// );
// 榜单数据接口
const Url = API + '/top/list?idx=';
export const newSongData = fetch(Url + '0');
export const OriginalData = fetch(Url + '2');
export const HotSongData = fetch(Url + '1');
export const SoaringData = fetch(Url + '3');

//获取歌单广场数据
export const RecommendedPlaylist = fetch(API + '/personalized?limit=100');
//热搜榜
export const HotSearchData = fetch(API + '/search/hot/detail');
